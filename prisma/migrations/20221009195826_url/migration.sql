-- CreateTable
CREATE TABLE "url" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "short_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "url_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "url_short_url_key" ON "url"("short_url");
