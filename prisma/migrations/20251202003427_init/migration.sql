-- CreateTable
CREATE TABLE "Tile" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Tile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "meta" JSONB,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerCorrectTile" (
    "playerId" INTEGER NOT NULL,
    "tileId" INTEGER NOT NULL,

    CONSTRAINT "PlayerCorrectTile_pkey" PRIMARY KEY ("playerId","tileId")
);

-- AddForeignKey
ALTER TABLE "PlayerCorrectTile" ADD CONSTRAINT "PlayerCorrectTile_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerCorrectTile" ADD CONSTRAINT "PlayerCorrectTile_tileId_fkey" FOREIGN KEY ("tileId") REFERENCES "Tile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
