# Migration `20201004115343`

This migration has been generated by Gabriel Colson at 10/4/2020, 1:53:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Worker" ALTER COLUMN "ip" SET NOT NULL
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201004115327..20201004115343
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgres"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -45,9 +45,9 @@
   id        Int      @id @default(autoincrement())
   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt
-  ip     String?
+  ip     String
   status WorkerStatus
   task   Task?        @relation(fields: [taskId], references: [id])
   taskId Int?
 }
```


