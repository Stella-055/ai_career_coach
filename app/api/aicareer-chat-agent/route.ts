import { inngest } from "@/inngest/client";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";



export async function POST(req: NextRequest) {
  try {
    const { userInput } = await req.json();

    const result = await inngest.send({
      name: "aicareeragent",
      data: { userInput },
    });


    const eventId = result.ids?.[0];
    if (!eventId) {
      throw new Error("No event ID returned");
    }

    let runs: any[] = [];
    let attempts = 0;
    const maxAttempts = 120; // ~60 seconds

    while (attempts < maxAttempts) {
      runs = await getRuns(eventId);

      if (runs.length > 0) {
        const status = runs[0].status;
        console.log("Run status:", status);

        if (status === "Completed") {
          break;
        }
        if (status === "Failed" || status === "Cancelled") {
          throw new Error(`Function run ${status.toLowerCase()}`);
        }
      }

      await new Promise((r) => setTimeout(r, 500));
      attempts++;
    }

    if (runs.length === 0) {
      return NextResponse.json(
        { error: "No runs found after waiting — check Inngest dashboard or logs" },
        { status: 504 }
      );
    }

    if (runs[0].status !== "Completed") {
      return NextResponse.json(
        { error: `Run ended in ${runs[0].status}` },
        { status: 500 }
      );
    }

    // Inspect your actual output shape in the local dashboard
    // Common paths: output, output.result, output.output, output[0], etc.
    const finalOutput = runs[0].output?.output?.[0] ?? runs[0].output ?? null;

    return NextResponse.json(finalOutput);
  } catch (error: any) {
    console.error("Error in POST:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

 export async function getRuns(eventId: string) {
  const baseUrl =  process.env.INNGEST_BASE_URL || "http://localhost:8288"

  const url = `${baseUrl}/v1/events/${eventId}/runs`;

  console.log("Fetching runs from:", url);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`,
    },
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "No body");
    console.error(`Inngest API error: ${response.status} - ${text}`);
    throw new Error(`Failed to fetch runs: ${response.status}`);
  }

  const json = await response.json();
  console.log("Raw runs response:", json);

  // The data is usually under json.data as array of run objects
  return json.data ?? [];
}

 