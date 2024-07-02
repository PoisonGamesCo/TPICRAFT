// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

/*GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:osmium_vein", vein =>{
        vein.weight(60)
        vein.clusterSize(30)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('stone')
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")

        vein.heightRangeUniform(4, 50)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).block(() => (Block.getBlock('alltheores:osmium_ore'))).size(2, 3))
                .layer(l => l.weight(1).block(() => (Block.getBlock('alltheores:iridium_ore'))).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Iron).size(1, 3))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:draconium_vein", vein =>{
        vein.weight(30)
        vein.clusterSize(15)
        vein.density(0.1)
        vein.discardChanceOnAirExposure(0.75)

        vein.layer('deepslate')
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")

        vein.heightRangeUniform(-60, -20)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Cassiterite_Sand).size(1, 3))
                .layer(l => l.weight(2).block(() => (Block.getBlock('draconicevolution:deepslate_draconium_ore'))).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.GarnetSand).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Amethyst).size(1, 3))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:divine_vein", vein =>{
        vein.weight(40)
        vein.clusterSize(20)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0.25)

        vein.layer('deepslate')
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")

        vein.heightRangeUniform(-30, 10)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).block(() => (Block.getBlock('divinerpg:realmite_ore_deepslate'))).size(2, 4))
                .layer(l => l.weight(2).block(() => (Block.getBlock('divinerpg:arlemite_ore_deepslate'))).size(2, 4))
                .layer(l => l.weight(1).block(() => (Block.getBlock('divinerpg:rupee_ore_deepslate'))).size(1, 1))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:allthemodium_vein", vein =>{
        vein.weight(160)
        vein.clusterSize(30)
        vein.density(0.1)
        vein.discardChanceOnAirExposure(0)

        vein.layer('deepslate')
        vein.dimensions("minecraft:overworld")
        vein.biomes("minecraft:deep_dark")

        vein.heightRangeUniform(-60, -20)
        
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(Block.getBlock('tardis_refined:zeiton_ore'), 2)
            .rareBlock(Block.getBlock('allthemodium:allthemodium_ore'), 1)
            .rareBlockChance(0.5)
            .veininessThreshold(0.05)
            .maxRichnessThreshold(0.1)
            .minRichness(0.05)
            .maxRichness(0.1)
            .edgeRoundofBegin(20)
            .maxeEdgeRoundoff(0.05)
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:niter_vein", vein =>{
        vein.weight(80)
        vein.clusterSize(50)
        vein.density(0.1)
        vein.discardChanceOnAirExposure(0)

        vein.layer('stone')
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")

        vein.heightRangeUniform(30, 80)
        
        vein.dikeVeinGenerator(generator => generator
            .withBlock(Block.getBlock('thermal:niter_ore', 6, 50, 80))
            .withBlock(Block.getBlock('mekanism:fluorite_ore', 2, 40, 60))
            .withBlock(Block.getBlock('phosphophyllite:phosphophyllite_ore', 1, 30, 60))
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:inferium_vein", vein =>{
        vein.weight(80)
        vein.clusterSize(50)
        vein.density(0.1)
        vein.discardChanceOnAirExposure(0)

        vein.layer('stone')
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")

        vein.heightRangeUniform(20, 40)
        
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(Block.getBlock('mysticalagriculture:inferium_ore'), 2)
            .rareBlock(Block.getBlock('mysticalagriculture:prosperity_ore'), 1)
            .rareBlockChance(0.75)
            .veininessThreshold(0.05)
            .maxRichnessThreshold(0.1)
            .minRichness(0.05)
            .maxRichness(0.1)
            .edgeRoundofBegin(20)
            .maxeEdgeRoundoff(0.05)
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:zinc_vein", vein =>{
        vein.weight(60)
        vein.clusterSize(30)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('stone')
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")

        vein.heightRangeUniform(20, 80)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Copper).size(1, 3))
                .layer(l => l.weight(2).block(() => (Block.getBlock('alltheores:zinc_ore'))).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Iron).size(1, 1))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:uranium_vein", vein =>{
        vein.weight(40)
        vein.clusterSize(20)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(0.9)

        vein.layer('deepslate')
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")

        vein.heightRangeUniform(-60, -10)
        
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(Block.getBlock('alltheores:deepslate_uranium_ore'), 2)
            .rareBlock(GTMaterials.Uraninite, 1)
            .rareBlockChance(0.75)
            .veininessThreshold(0.3)
            .maxRichnessThreshold(0.6)
            .minRichness(0.3)
            .maxRichness(0.6)
            .edgeRoundofBegin(10)
            .maxeEdgeRoundoff(0.3)
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:peridot_vein", vein =>{
        vein.weight(40)
        vein.clusterSize(30)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('stone')
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")

        vein.heightRangeUniform(5, 40)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Opal).size(1, 2))
                .layer(l => l.weight(3).block(() => (Block.getBlock('alltheores:peridot_ore'))).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.YellowGarnet).size(1, 2))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:thorium_vein", vein =>{
        vein.weight(40)
        vein.clusterSize(30)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('stone')
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")

        vein.heightRangeUniform(5, 40)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Trona).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Thorium).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Monazite).size(1, 2))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:crystal_vein", vein =>{
        vein.weight(40)
        vein.clusterSize(20)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)

        vein.layer('stone')
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")

        vein.heightRangeUniform(10, 30)
        
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(Block.getBlock('elementalcraft:inert_crystal_ore'), 2)
            .rareBlock(Block.getBlock('rftoolsbase:dimensionalshard_overworld'), 1)
            .rareBlockChance(0.75)
            .veininessThreshold(0.3)
            .maxRichnessThreshold(0.7)
            .minRichness(0.7)
            .maxRichness(0.3)
            .edgeRoundofBegin(12)
            .maxeEdgeRoundoff(0.5)
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:bloodgem_vein", vein =>{
        vein.weight(40)
        vein.clusterSize(15)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)

        vein.layer('netherrack')
        vein.dimensions("minecraft:nether")
        vein.biomes("#minecraft:is_nether")

        vein.heightRangeUniform(60, 120)
        
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(Block.getBlock('divinerpg:bloodgem_ore'), 2)
            .rareBlock(Block.getBlock('divinerpg:torridite_ore'), 1)
            .rareBlockChance(0.75)
            .veininessThreshold(0.15)
            .maxRichnessThreshold(0.3)
            .minRichness(0.3)
            .maxRichness(0.15)
            .edgeRoundofBegin(10)
            .maxeEdgeRoundoff(0.2)
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:soulium_vein", vein =>{
        vein.weight(80)
        vein.clusterSize(40)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(0)

        vein.layer('netherrack')
        vein.dimensions("minecraft:nether")
        vein.biomes("#minecraft:is_nether")

        vein.heightRangeUniform(5, 60)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).block(() => (Block.getBlock('mysticalagradditions:nether_inferium_ore'))).size(1, 3))
                .layer(l => l.weight(1).block(() => (Block.getBlock('mysticalagriculture:soulium_ore'))).size(1, 1))
                .layer(l => l.weight(1).block(() => (Block.getBlock('mysticalagradditions:nether_prosperity_ore'))).size(1, 2))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:osmium_vein", vein =>{
        vein.weight(40)
        vein.clusterSize(30)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('netherrack')
        vein.dimensions("minecraft:nether")
        vein.biomes("#minecraft:is_nether")

        vein.heightRangeUniform(20, 100)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).block(() => (Block.getBlock('alltheores:nether_osmium_ore'))).size(2, 3))
                .layer(l => l.weight(1).block(() => (Block.getBlock('alltheores:nether_iridium_ore'))).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Iron).size(1, 3))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:nether_uranium_vein", vein =>{
        vein.weight(40)
        vein.clusterSize(20)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(0.9)

        vein.layer('netherrack')
        vein.dimensions("minecraft:nether")
        vein.biomes("#minecraft:is_nether")

        vein.heightRangeUniform(0, 30)
        
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(Block.getBlock('alltheores:nether_uranium_ore'), 2)
            .rareBlock(GTMaterials.Uraninite, 1)
            .rareBlockChance(0.75)
            .veininessThreshold(0.3)
            .maxRichnessThreshold(0.6)
            .minRichness(0.3)
            .maxRichness(0.6)
            .edgeRoundofBegin(10)
            .maxeEdgeRoundoff(0.3)
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:nether_zinc_vein", vein =>{
        vein.weight(40)
        vein.clusterSize(30)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('netherrack')
        vein.dimensions("minecraft:nether")
        vein.biomes("#minecraft:is_nether")

        vein.heightRangeUniform(20, 50)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Copper).size(1, 3))
                .layer(l => l.weight(2).block(() => (Block.getBlock('alltheores:nether_zinc_ore'))).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Magnesite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Magnetite).size(1, 1))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:netherite_vein", vein =>{
        vein.weight(20)
        vein.clusterSize(20)
        vein.density(0.1)
        vein.discardChanceOnAirExposure(1)

        vein.layer('netherrack')
        vein.dimensions("minecraft:nether")
        vein.biomes("#minecraft:is_nether")

        vein.heightRangeUniform(0, 30)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Gold).size(1, 3))
                .layer(l => l.weight(1).block(() => (Block.getBlock('minecraft:ancient_debris'))).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Cobalt).size(1, 2))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:nether_aluminium_vein", vein =>{
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.4)
        vein.discardChanceOnAirExposure(0)

        vein.layer('netherrack')
        vein.dimensions("minecraft:nether")
        vein.biomes("#minecraft:is_nether")

        vein.heightRangeUniform(30, 120)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Silver).size(2, 3))
                .layer(l => l.weight(2).block(() => (Block.getBlock('alltheores:nether_aluminum_ore'))).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Nickel).size(1, 2))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:nether_dimensional_vein", vein =>{
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.4)
        vein.discardChanceOnAirExposure(0)

        vein.layer('netherrack')
        vein.dimensions("minecraft:nether")
        vein.biomes("#minecraft:is_nether")

        vein.heightRangeUniform(30, 120)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Platinum).size(1, 1))
                .layer(l => l.weight(3).block(() => (Block.getBlock('rftoolsbase:dimensionalshard_nether'))).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Cobaltite).size(2, 4))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:vibranium_vein", vein =>{
        vein.weight(30)
        vein.clusterSize(25)
        vein.density(0.2)
        vein.discardChanceOnAirExposure(0)

        vein.layer('netherrack')
        vein.dimensions("minecraft:nether")
        vein.biomes("#minecraft:is_nether")

        vein.heightRangeUniform(70, 120)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).block(() => (Block.getBlock('allthemodium:vibranium_ore'))).size(1, 1))
                .layer(l => l.weight(2).block(() => (Block.getBlock('draconicevolution:nether_draconium_ore'))).size(1, 1))
                .layer(l => l.weight(3).mat(GTMaterials.Amethyst).size(2, 4))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:end_inferium_vein", vein =>{
        vein.weight(80)
        vein.clusterSize(50)
        vein.density(0.1)
        vein.discardChanceOnAirExposure(0)

        vein.layer('endstone')
        vein.dimensions("minecraft:end")
        vein.biomes("#minecraft:is_end")

        vein.heightRangeUniform(40, 80)
        
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(Block.getBlock('mysticalagradditions:end_inferium_ore'), 2)
            .rareBlock(Block.getBlock('mysticalagradditions:end_prosperity_ore'), 1)
            .rareBlockChance(0.75)
            .veininessThreshold(0.05)
            .maxRichnessThreshold(0.1)
            .minRichness(0.05)
            .maxRichness(0.1)
            .edgeRoundofBegin(20)
            .maxeEdgeRoundoff(0.05)
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:galena_vein", vein =>{
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.4)
        vein.discardChanceOnAirExposure(0)

        vein.layer('endstone')
        vein.dimensions("minecraft:end")
        vein.biomes("#minecraft:is_end")

        vein.heightRangeUniform(20, 50)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Galena).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.Lead).size(3, 5))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:end_osmium_vein", vein =>{
        vein.weight(60)
        vein.clusterSize(30)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('endstone')
        vein.dimensions("minecraft:end")
        vein.biomes("#minecraft:is_end")

        vein.heightRangeUniform(20, 60)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).block(() => (Block.getBlock('alltheores:end_osmium_ore'))).size(2, 3))
                .layer(l => l.weight(1).block(() => (Block.getBlock('alltheores:end_iridium_ore'))).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Iron).size(1, 3))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:unobtanium_vein", vein =>{
        vein.weight(160)
        vein.clusterSize(25)
        vein.density(0.2)
        vein.discardChanceOnAirExposure(0)

        vein.layer('endstone')
        vein.dimensions("minecraft:end")
        vein.biomes("minecraft:end_highlands")

        vein.heightRangeUniform(20, 120)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).block(() => (Block.getBlock('allthemodium:unobtainium_ore'))).size(1, 1))
                .layer(l => l.weight(2).block(() => (Block.getBlock('draconicevolution:end_draconium_ore'))).size(1, 1))
                .layer(l => l.weight(3).mat(GTMaterials.Amethyst).size(2, 4))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:loran_vein", vein =>{
        vein.weight(30)
        vein.clusterSize(20)
        vein.density(0.4)
        vein.discardChanceOnAirExposure(0)

        vein.layer('endstone')
        vein.dimensions("minecraft:end")
        vein.biomes("#minecraft:is_end")

        vein.heightRangeUniform(60, 120)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).block(() => (Block.getBlock('theabyss:loran_end_ore'))).size(1, 2))
                .layer(l => l.weight(1).block(() => (Block.getBlock('rftoolsbase:dimensionalshard_end'))).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Opal).size(2, 4))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:end_aluminium_vein", vein =>{
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.4)
        vein.discardChanceOnAirExposure(0)

        vein.layer('endstone')
        vein.dimensions("minecraft:end")
        vein.biomes("#minecraft:is_end")

        vein.heightRangeUniform(20, 50)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(2, 3))
                .layer(l => l.weight(1).block(() => (Block.getBlock('alltheores:end_aluminum_ore'))).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Nickel).size(1, 2))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:end_uranium_vein", vein =>{
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.4)
        vein.discardChanceOnAirExposure(0)

        vein.layer('endstone')
        vein.dimensions("minecraft:end")
        vein.biomes("#minecraft:is_end")

        vein.heightRangeUniform(20, 50)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Uraninite).size(1, 2))
                .layer(l => l.weight(2).block(() => (Block.getBlock('alltheores:end_uranium_ore'))).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Plutonium).size(1, 2))
            )
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:end_zinc_vein", vein =>{
        vein.weight(40)
        vein.clusterSize(30)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('endstone')
        vein.dimensions("minecraft:end")
        vein.biomes("#minecraft:is_end")

        vein.heightRangeUniform(20, 50)
        
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Copper).size(1, 3))
                .layer(l => l.weight(2).block(() => (Block.getBlock('alltheores:end_zinc_ore'))).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Magnesite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Magnetite).size(1, 1))
            )
        )
    })
})*/