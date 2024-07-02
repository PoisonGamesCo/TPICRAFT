GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('fluorite')
        .gem(1) 
        .components('1x calcium', '2x fluorine')
        .ore(3, 1) 
        .color(0xDBEFEC).iconSet(GTMaterialIconSet.RUBY)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('peridot')
        .gem(0) 
        .components('2x magnesium', '1x silicon', '4x oxygen')
        .ore(3, 1) 
        .color(0xE5EF43).iconSet(GTMaterialIconSet.GEM_VERTICAL)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('arlemite')
        .ingot(2) 
        .element(GTElements.Te)
        .ore(1, 1) 
        .color(0x6FBB4E)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('rupee')
        .ingot(2) 
        .element(GTElements.Hf)
        .ore(1, 1) 
        .color(0x3AC4E1)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('realmite')
        .ingot(1) 
        .element(GTElements.Re)
        .ore(1, 1) 
        .color(0xEEAD26)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('bloodgem')
        .gem(2) 
        .components('3x beryllium', '2x aluminium', '6x nether_quartz')
        .ore(1, 1) 
        .color(0xCD2C70).iconSet(GTMaterialIconSet.DIAMOND)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('torridite')
        .ingot(3) 
        .components('20x copper', '3x tin', '1x phosphorus')
        .ore(1, 1) 
        .color(0xB91D1D)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('dickite')
        .gem(1) 
        .components('2x aluminium', '2x silicon', '1x oxygen', '4x water')
        .color(0xEADDD0).iconSet(GTMaterialIconSet.LAPIS)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('zeiton')
        .ingot(2) 
        .components('1x copper', '1x aluminium', '1x dickite', '2x water')
        .ore(1, 1) 
        .color(0x70CFAB)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('niter')
        .gem(0) 
        .components('1x potassium', '1x nitrogen', '3x oxygen')
        .ore(1, 2) 
        .color(0xB8AFAF).iconSet(GTMaterialIconSet.RUBY)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('dimensional_shard')
        .gem(2) 
        .components('1x diamond', '1x emerald', '1x gold', '1x iron', '1x redstone', '1x nether_quartz', '1x glass', '1x malachite', '1x phosphorus')
        .ore(5, 5)
        .color(0x6BB5B2).iconSet(GTMaterialIconSet.LAPIS)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('draconium')
        .ingot(0) 
        .components('1x copper', '1x antimony')
        .ore(4, 4)
        .color(0x7943AE)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('prosperity_shard')
        .gem(2) 
        .components('2x beryllium', '1x silicon', '4x oxygen')
        .ore(4, 4)
        .color(0xAECCCC).iconSet(GTMaterialIconSet.RUBY)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('inferium_essence')
        .dust(1) 
        .components('2x chromium', '3x oxygen')
        .ore(4, 4)
        .color(0x738C00)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('soulium_dust')
        .dust(1) 
        .components('1x manganese', '2x oxygen')
        .ore(3, 3)
        .color(0x5D3927)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('refined_obsidian')
        .ingot() 
        .components('8x obsidian', '1x diamond')
        .color(0x987CBB)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('refined_glowstone')
        .ingot() 
        .components('1x phosphorus', '1x osmium')
        .color(0xFCE56C)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('infused_alloy')
        .ingot() 
        .components('8x iron', '1x redstone')
        .color(0xEA463E)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('reinforced_alloy')
        .ingot() 
        .components('8x infused_alloy', '1x diamond')
        .color(0x93F2F5)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('atomic_alloy')
        .ingot() 
        .components('8x reinforced_alloy', '1x refined_obsidian')
        .color(0xAF7DD3)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('andesite_alloy')
        .ingot() 
        .components('2x iron', '5x silicon_dioxide', '2x calcium', '1x oxygen')
        .color(0xA8AFA1)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('redstone_ingot')
        .ingot() 
        .components('1x iron', '1x redstone')
        .color(0xA80F01)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('ender_ingot')
        .ingot() 
        .components('1x iron', '1x ender_pearl')
        .color(0x1B7A6A)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('prosperity_ingot')
        .ingot() 
        .components('1x iron', '4x prosperity_shard')
        .color(0xAECCCC)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('prosperity_gemstone')
        .gem() 
        .components('1x diamond', '4x prosperity_shard')
        .color(0xAECCCC).iconSet(GTMaterialIconSet.DIAMOND)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('inferium_ingot')
        .ingot() 
        .components('1x prosperity_ingot', '2x inferium_essence')
        .color(0x738C00)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('inferium_gemstone')
        .gem() 
        .components('1x prosperity_gemstone', '2x inferium_essence')
        .color(0x738C00).iconSet(GTMaterialIconSet.DIAMOND)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('soulium_gemstone')
        .gem() 
        .components('1x prosperity_gemstone', '2x soulium_dust')
        .color(0x5D3927).iconSet(GTMaterialIconSet.DIAMOND)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('inferium_coal')
        .gem() 
        .components('1x coal', '2x inferium_essence')
        .color(0x738C00).iconSet(GTMaterialIconSet.LIGNITE)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('compressed_iron')
        .ingot() 
        .element(GTElements.Fe)
        .color(0x868686)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('copper_alloy')
        .ingot() 
        .components('1x copper', '1x silicon')
        .color(0xBB8418)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('energetic_alloy')
        .ingot() 
        .components('1x redstone', '1x gold', '1x phosphorus')
        .color(0xEBB73D)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('vibrant_alloy')
        .ingot() 
        .components('1x energetic_alloy', '1x ender_pearl')
        .color(0xE6FB76)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('redstone_alloy')
        .ingot() 
        .components('1x redstone', '1x silicon')
        .color(0xF65B5B)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('conductive_alloy')
        .ingot() 
        .components('1x copper_alloy', '1x iron', '1x redstone')
        .color(0xD2A29F)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('pulsating_alloy')
        .ingot() 
        .components('1x iron', '1x ender_pearl')
        .color(0x6FD184)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('dark_steel')
        .ingot() 
        .components('1x iron', '1x coal', '1x obsidian')
        .color(0x828282)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('pulsating_crystal')
        .gem() 
        .components('9x diamond', '8x vibrant_alloy')
        .color(0x58D7F7).iconSet(GTMaterialIconSet.EMERALD)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('vibrant_crystal')
        .gem() 
        .components('9x emerald', '8x vibrant_alloy')
        .color(0xA3F398).iconSet(GTMaterialIconSet.EMERALD)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('photovoltaic_composite')
        .dust() 
        .components('1x coal', '1x lapis', '1x silicon')
        .color(0x515253)
        .secondaryColor(0x2A4D9F)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('shadow_bar')
        .ingot() 
        .components('1x arlemite', '1x rupee')
        .color(0x666666)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('red_diamond_chunk')
        .gem() 
        .components('1x torridite', '1x diamond')
        .color(0xD82D1C).iconSet(GTMaterialIconSet.DIAMOND)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('yellow_diamond_chunk')
        .gem() 
        .components('1x realmite', '1x diamond')
        .color(0xF0B332).iconSet(GTMaterialIconSet.DIAMOND)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('green_diamond_chunk')
        .gem() 
        .components('1x arlemite', '1x diamond')
        .color(0xADE967).iconSet(GTMaterialIconSet.DIAMOND)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('blue_diamond_chunk')
        .gem() 
        .components('1x rupee', '1x diamond')
        .color(0x01A6E3).iconSet(GTMaterialIconSet.DIAMOND)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('gray_diamond_chunk')
        .gem() 
        .components('1x shadow_bar', '1x diamond')
        .color(0x595959).iconSet(GTMaterialIconSet.DIAMOND)
})