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
