import { integer, json, pgTable, varchar } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
});

export const userHistory = pgTable("userHistory", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
   recordId: varchar({ length: 255 }).notNull(),
   content:json(),
    useremail: varchar({ length: 255 }).references(()=>usersTable.email),
    createdAt:varchar(),
    clouldpdfurl:varchar()
});