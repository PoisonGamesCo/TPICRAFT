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
        .ore(1, 1) 
        .color(0x6FBB4E)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('rupee')
        .ingot(2)
        .ore(1, 1) 
        .color(0x3AC4E1)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('realmite')
        .ingot(1)
        .ore(1, 1) 
        .color(0xEEAD26)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('bloodgem')
        .gem(2)
        .ore(1, 1) 
        .color(0xCD2C70).iconSet(GTMaterialIconSet.DIAMOND)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('torridite')
        .ingot(3)
        .ore(1, 1) 
        .color(0xB91D1D)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('zeiton')
        .ingot(2)
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
        .ore(5, 5)
        .color(0x6BB5B2).iconSet(GTMaterialIconSet.LAPIS)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('draconium')
        .ingot(0)
        .ore(4, 4)
        .color(0x7943AE)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('prosperity_shard')
        .gem(2)
        .ore(4, 4)
        .color(0xAECCCC).iconSet(GTMaterialIconSet.RUBY)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('inferium_essence')
        .dust(1)
        .ore(4, 4)
        .color(0x738C00)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('soulium_dust')
        .dust(1)
        .ore(3, 3)
        .color(0x5D3927)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('copper_alloy')
        .ingot() 
        .components('1x copper', '1x silicon')
        .color(0xBB8418)
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
    event.create('photovoltaic_composite')
        .dust() 
        .components('1x coal', '1x lapis', '1x silicon')
        .color(0x515253)
        .secondaryColor(0x2A4D9F)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('constantan')
        .ingot() 
        .components('1x nickel', '1x copper')
        .color(0xECBF62)
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_PLATE)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('signalum')
        .ingot() 
        .components('3x copper', '1x silver', '4x redstone')
        .color(0xEC3606)
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_PLATE)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('enderium')
        .ingot() 
        .components('3x lead', '1x diamond', '2x ender_pearl')
        .color(0x1D7D8A)
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_PLATE)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('loran')
        .gem(0)
        .ore(2, 2) 
        .color(0xB6DFFC).iconSet(GTMaterialIconSet.RUBY)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('garnite')
        .ingot(0)
        .ore(2, 2) 
        .color(0x27DDA8).secondaryColor(0x20272B)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('ignisithe')
        .gem(0)
        .ore(1, 1) 
        .color(0x3B9CB5).iconSet(GTMaterialIconSet.EMERALD)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('glacerythe')
        .gem(0)
        .ore(1, 1) 
        .color(0x84EDE8).iconSet(GTMaterialIconSet.EMERALD)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('aberythe')
        .gem(0)
        .ore(1, 1) 
        .color(0xC248EF).iconSet(GTMaterialIconSet.FLINT)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('incorythe')
        .gem(0)
        .ore(1, 1) 
        .color(0x30A892).iconSet(GTMaterialIconSet.GEM_VERTICAL)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('oxdrite')
        .ingot(1)
        .ore(1, 1) 
        .color(0xBB8068)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('spectrite')
        .ingot(1)
        .ore(1, 1) 
        .color(0xC1740).secondaryColor(0x7C69E3)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('positite')
        .gem(2)
        .ore(1, 1) 
        .color(0xFCFC8C).iconSet(GTMaterialIconSet.OPAL)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('zitrite')
        .ingot(1)
        .ore(1, 1) 
        .color(0x1C1E1C)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('negatite')
        .gem(2)
        .ore(1, 1) 
        .color(0xDB3C4E).iconSet(GTMaterialIconSet.RUBY)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('desh')
        .ingot(2)
        .ore(1, 1) 
        .color(0xD38B4C)
        .flags(GTMaterialFlags.GENERATE_PLATE)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('ostrum')
        .ingot(2)
        .ore(1, 1) 
        .color(0xA66B72)
        .flags(GTMaterialFlags.GENERATE_PLATE)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('calorite')
        .ingot(2)
        .ore(1, 1) 
        .color(0xC94D4E)
        .flags(GTMaterialFlags.GENERATE_PLATE)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('aquite')
        .gem(1)
        .ore(1, 1) 
        .color(0x5BB8DD).iconSet(GTMaterialIconSet.LIGNITE)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('diopside')
        .gem(2)
        .ore(1, 1) 
        .color(0x01DC19).iconSet(GTMaterialIconSet.QUARTZ)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('charoite')
        .gem(1)
        .ore(1, 1) 
        .color(0xB587D6).iconSet(GTMaterialIconSet.LIGNITE)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('falsite')
        .ingot(1)
        .ore(1, 1) 
        .color(0x7561E2)
        .flags(GTMaterialFlags.GENERATE_PLATE)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('ventium')
        .ingot(1)
        .ore(1, 1) 
        .color(0xCF2532)
        .flags(GTMaterialFlags.GENERATE_PLATE)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('horizonite')
        .ingot(1)
        .ore(1, 1) 
        .color(0xFC8D39)
        .flags(GTMaterialFlags.GENERATE_PLATE)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('ambrosium')
        .gem(1)
        .ore(1, 1) 
        .color(0xF1EF5F).iconSet(GTMaterialIconSet.FLINT)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('zanite')
        .gem(1)
        .ore(1, 1) 
        .color(0x7935DD).iconSet(GTMaterialIconSet.OPAL)
})