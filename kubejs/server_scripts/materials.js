ServerEvents.recipes(event => {
    function replace(old, replacement){
        event.replaceInput(
            {input: old},
            old,
            replacement
        )

        event.replaceOutput(
            {output: old},
            old,
            replacement
        )
    }

    replace('divinerpg:arlemite_ingot', 'gtceu:arlemite_ingot')
    replace('divinerpg:rupee_ingot', 'gtceu:rupee_ingot')
    replace('divinerpg:realmite_ingot', 'gtceu:realmite_ingot')
    replace('divinerpg:bloodgem', 'gtceu:bloodgem_gem')
    replace('divinerpg:torridite_ingot', 'gtceu:torridite_ingot')
    replace('tardis_refined:zeiton_ingot', 'gtceu:zeiton_ingot')
    replace('tardis_refined:zeiton_block', 'gtceu:zeiton_block')
    replace('tardis_refined:zeiton_nugget', 'gtceu:zeiton_nugget')
    replace('rftoolsbase:dimensionalshard', 'gtceu:dimensional_shard_gem')
    replace('mysticalagriculture:prosperity_shard', 'gtceu:prosperity_shard_gem')
    replace('mysticalagriculture:inferium_essence', 'gtceu:inferium_essence_dust')
    replace('mysticalagriculture:soulium_dust', 'gtceu:soulium_dust_dust')
    replace('enderio:copper_alloy_ingot', 'gtceu:copper_alloy_ingot')
    replace('enderio:redstone_alloy_ingot', 'gtceu:redstone_alloy_ingot')
    replace('enderio:conductive_alloy_ingot', 'gtceu:conductive_alloy_ingot')
    replace('enderio:pulsating_alloy_ingot', 'gtceu:pulsating_alloy_ingot')
    replace('enderio:dark_steel_ingot', 'gtceu:dark_steel_ingot')
    replace('enderio:photovoltaic_composite', 'gtceu:photovoltaic_composite_dust')
    replace('enderio:dark_steel_ingot', 'gtceu:dark_steel_ingot')
    replace('theabyss:loran','gtceu:loran_gem')
    replace('theabyss:garnite_ingot', 'gtceu:garnite_ingot')
    replace('theabyss:ignisithe_gem', 'gtceu:ignisithe_gem')
    replace('theabyss:glacerythe_gem', 'gtceu:glacerythe_gem')
    replace('theabyss:aberythe_gem', 'gtceu:aberythe_gem')
    replace('theabyss:incorythe_gem', 'gtceu:incorythe_gem')
    replace('good_nights_sleep:raw_spectrite', 'gtceu:raw_spectrite')
    replace('good_nights_sleep:spectrite_ingot', 'gtceu:spectrite_ingot')
    replace('good_nights_sleep:raw_spectrite_block', 'gtceu:raw_spectrite_block')
    replace('good_nights_sleep:spectrite_block', 'gtceu:spectrite_block')
    replace('good_nights_sleep:positite', 'gtceu:positite_gem')
    replace('good_nights_sleep:positite_block', 'gtceu:positite_block')
    replace('good_nights_sleep:zitrite_ingot', 'gtceu:zitrite_ingot')
    replace('good_nights_sleep:zitrite_block', 'gtceu:zitrite_block')
    replace('good_nights_sleep:raw_zitrite', 'gtceu:raw_zitrite')
    replace('good_nights_sleep:negatite', 'gtceu:negatite_gem')
    replace('good_nights_sleep:negatite_block', 'gtceu:negatite_block')
    replace('blue_skies:aquite', 'gtceu:aquite_gem')
    replace('blue_skies:aquite_block', 'gtceu:aquite_block')
    replace('blue_skies:raw_aquite', 'gtceu:raw_aquite')
    replace('blue_skies:raw_aquite_block', 'gtceu:raw_aquite_block')
    replace('blue_skies:diopside_gem', 'gtceu:diopside_gem')
    replace('blue_skies:diopside_block', 'gtceu:diopside_block')
    replace('blue_skies:charoite', 'gtceu:charoite_gem')
    replace('blue_skies:raw_charoite', 'gtceu:raw_charoite')
    replace('blue_skies:charoite_block', 'gtceu:charoite_block')
    replace('blue_skies:raw_charoite_block', 'gtceu:raw_charoite_block')
    replace('blue_skies:falsite_ingot', 'gtceu:falsite_ingot')
    replace('blue_skies:raw_falsite', 'gtceu:raw_falsite')
    replace('blue_skies:falsite_block', 'gtceu:falsite_block')
    replace('blue_skies:raw_falsite_block', 'gtceu:raw_falsite_block')
    replace('blue_skies:falsite_nugget', 'gtceu:falsite_nugget')
    replace('blue_skies:ventium_ingot', 'gtceu:ventium_ingot')
    replace('blue_skies:ventium_block', 'gtceu:ventium_block')
    replace('blue_skies:raw_ventium_block', 'gtceu:raw_ventium_block')
    replace('blue_skies:ventium_nugget', 'gtceu:ventium_nugget')
    replace('blue_skies:raw_ventium', 'gtceu:raw_ventium')
    replace('blue_skies:horizonite_ingot', 'gtceu:horizonite_ingot')
    replace('blue_skies:horizonite_block', 'gtceu:horizonite_block')
    replace('blue_skies:raw_horizonite', 'gtceu:raw_horizonite')
    replace('blue_skies:horizonite_nugget', 'gtceu:horizonite_nugget')
    replace('blue_skies:raw_horizonite_block', 'gtceu:raw_horizonite_block')
    replace('aether:ambrosium_shard', 'gtceu:ambrosium_gem')
    replace('aether:ambrosium_block', 'gtceu:ambrosium_block')
    replace('aether:zanite_gemstone', 'gtceu:zanite_gem')
    replace('aether:zanite_block', 'gtceu:zanite_block')
    replace('alltheores:aluminum_ingot', 'gtceu:aluminium_ingot')
    replace('alltheores:aluminum_nugget', 'gtceu:aluminium_nugget')
    replace('alltheores:aluminum_dust', 'gtceu:aluminium_dust')
    replace('alltheores:raw_aluminum', 'gtceu:raw_aluminium')
    replace('alltheores:aluminum_rod', 'gtceu:aluminium_rod')
    replace('alltheores:aluminum_gear', 'gtceu:aluminium_gear')
    replace('alltheores:aluminum_plate', 'gtceu:aluminium_plate')
    replace('alltheores:constantan_plate', 'gtceu:cupronickel_plate')
    replace('alltheores:constantan_ingot', 'gtceu:cupronickel_ingot')
    replace('alltheores:constantan_dust', 'gtceu:cupronickel_dust')
    replace('alltheores:constantan_nugget', 'gtceu:cupronickel_nugget')
    replace('alltheores:constantan_rod', 'gtceu:cupronickel_rod')
    replace('alltheores:constantan_block', 'gtceu:cupronickel_block')

  /*    componentSets = []
        dust
        macerationLevel = 0
        rod
        plate
        gear
        metalWorkingLevel = 0
        nugget
        tinyDust
        raw
        block
        rawBlock */

    var materialList = []

    materialList.push({ //0
        base:'minecraft:stone',
        material:'stone',
        type:'other'
    })

    materialList.push({ //1
        base:'minecraft:iron_ingot',
        material:'iron',
        type:'ingot',
        flags:['easy_crush']
    })

    materialList.push({ //2
        base:'minecraft:copper_ingot',
        material:'copper',
        type:'ingot',
        flags:['easy_crush']
    })

    materialList.push({ //3
        base:'minecraft:gold_ingot',
        material:'gold',
        type:'ingot',
        flags:['easy_crush']
    })

    materialList.push({ //4
        base:'botania:manasteel_ingot',
        material:'manasteel',
        type:'ingot'
    })

    materialList.push({ //5 
        base:'botania:terrasteel_ingot',
        material:'terrasteel',
        type:'ingot'
    })

    materialList.push({ //6
        base:'botania:elementium_ingot',
        material:'elementium',
        type:'ingot'
    })
    
    materialList.push({ //7
        base:'mysticalagradditions:insanium_ingot',
        material:'insanium',
        type:'ingot'
    })

    materialList.push({ //8
        base:'mysticalagriculture:prosperity_ingot',
        material:'prosperity',
        type:'ingot'
    })

    materialList.push({ //9
        base:'mysticalagriculture:inferium_ingot',
        material:'inferium',
        type:'ingot'
    })

    materialList.push({ //10
        base:'mysticalagriculture:prudentium_ingot',
        material:'prudentium',
        type:'ingot'
    })

    materialList.push({ //11
        base:'mysticalagriculture:tertium_ingot',
        material:'tertium',
        type:'ingot'
    })

    materialList.push({ //12
        base:'mysticalagriculture:imperium_ingot',
        material:'imperium',
        type:'ingot'
    })

    materialList.push({ //13
        base:'mysticalagriculture:supremium_ingot',
        material:'supremium',
        type:'ingot'
    })

    materialList.push({ //14
        base:'mysticalagriculture:awakened_supremium_ingot',
        material:'awakened_supremium',
        type:'ingot'
    })

    materialList.push({ //15
        base:'biggerreactors:blutonium_ingot',
        dust:'biggerreactors:blutonium_dust',
        block:'biggerreactors:blutonium_block',
        type:'ingot'
    })

    materialList.push({ //16
        base:'biggerreactors:cyanite_ingot',
        material:'cyanite',
        type:'ingot'
    })

    materialList.push({ //17
        base:'biggerreactors:graphite_ingot',
        material:'graphite',
        type:'ingot'
    })

    materialList.push({ //18
        base:'biggerreactors:ludicrite_ingot',
        material:'ludicrite',
        type:'ingot'
    })

    materialList.push({ //19
        base:'elementalcraft:drenched_iron_ingot',
        material:'drenched_iron',
        type:'ingot'
    })

    materialList.push({ //20
        base:'elementalcraft:swift_alloy_ingot',
        material:'swift_alloy',
        type:'ingot'
    })

    materialList.push({ //21
        base:'elementalcraft:fireite_ingot',
        material:'fireite',
        type:'ingot'
    })
    materialList.push({ //22
        base:'gtceu:aluminium_ingot',
        material: 'aluminium',
        type:'ingot',
        smeltingLevel:'3'
    })

    materialList.push({ //23
        base:'gtceu:americium_ingot',
        material:'americium',
        type:'ingot'
    })

    materialList.push({ //24
        base:'gtceu:antimony_ingot',
        material:'antimony',
        type:'ingot',
        flags:['easy_crush']
    })

    materialList.push({ //25
        base:'gtceu:beryllium_ingot',
        material:'beryllium',
        type:'ingot',
        flags:['easy_crush']
    })

    materialList.push({ //26
        base:'gtceu:bismuth_ingot',
        material:'bismuth',
        type:'ingot'
    })

    materialList.push({ //27 
        base:'gtceu:chromium_ingot',
        material:'chromium',
        smeltingLevel: '3',
        type:'ingot'
    })

    materialList.push({ //28
        base:'gtceu:cobalt_ingot',
        material:'cobalt',
        type:'ingot'
    })
    
    materialList.push({ //29
        base:'gtceu:darmstadtium_ingot',
        material:'darmstadtium',
        type:'ingot'
    })

    materialList.push({ //30
        base:'gtceu:europium_ingot',
        material:'europium',
        type:'ingot',
        smeltingLevel: '6 f'
    })

    materialList.push({ //31 
        base:'gtceu:gallium_ingot',
        material:'gallium',
        type:'ingot'
    })

    materialList.push({ //32
        base:'gtceu:indium_ingot',
        material:'indium',
        type:'ingot'
    })

    materialList.push({ //33
        base:'gtceu:iridium_ingot',
        material:'iridium',
        type:'ingot',
        smeltingLevel: '6 f'
    })

    materialList.push({ //34 
        base:'gtceu:lead_ingot',
        material:'lead',
        flags: ['easy_crush']
    })

    materialList.push({ //35
        base:'gtceu:manganese_ingot',
        material:'manganese',
        type:'ingot'
    })

    materialList.push({ //36
        base:'gtceu:molybdenum_ingot',
        material:'molybdenum',
        type:'ingot'
    })

    materialList.push({ //37
        base:'gtceu:neodymium_ingot',
        material:'neodymium',
        type:'ingot',
        smeltingLevel: '3'
    })

    materialList.push({ //38
        base:'gtceu:nickel_ingot',
        material:'nickel',
        type:'ingot',
        flags:['easy_crush']
    })

    materialList.push({ //39
        base:'gtceu:niobium_ingot',
        material:'niobium',
        type:'ingot',
        smeltingLevel: '4 f'
    })

    materialList.push({ //40
        base:'gtceu:osmium_ingot',
        material:'osmium',
        type:'ingot',
        smeltingLevel: '7 f'
    })

    materialList.push({ //41
        base:'gtceu:palladium_ingot',
        material:'palladium',
        type:'ingot',
        smeltingLevel: '4 f'
    })

    materialList.push({ //42
        base:'gtceu:platinum_ingot',
        material:'platinum',
        type:'ingot'
    })

    materialList.push({ //43
        base:'gtceu:plutonium_ingot',
        material:'plutonium',
        type:'ingot'
    })

    materialList.push({ //44
        base:'gtceu:plutonium_241_ingot',
        material:'plutonium_241',
        type:'ingot'
    })

    materialList.push({ //45
        base:'gtceu:rhodium_ingot',
        material:'rhodium',
        type:'ingot',
        smeltingLevel:'5 f'
    })

    materialList.push({ //46
        base:'gtceu:ruthenium_ingot',
        material:'ruthenium',
        type:'ingot',
        smeltingLevel:'5 f'
    })

    materialList.push({ //47
        base:'gtceu:samarium_ingot',
        material:'samarium',
        type:'ingot',
        smeltingLevel:'5 f'
    })

    materialList.push({ //48
        base:'gtceu:silicon_ingot',
        material:'silicon',
        type:'ingot',
        smeltingLevel:'3 f'
    })

    materialList.push({ //49
        base:'gtceu:silver_ingot',
        material:'silver',
        type:'ingot',
        flags:['easy_crush']
    })

    materialList.push({ //50
        base:'gtceu:tantalum_ingot',
        material:'tantalum',
        type:'ingot'
    })

    materialList.push({ //51
        base:'gtceu:thorium_ingot',
        material:'thorium',
        type:'ingot'
    })

    materialList.push({ //52
        base:'gtceu:tin_ingot',
        material:'tin',
        type:'ingot',
        flags:'easy_crush'
    })

    materialList.push({ //53
        base:'gtceu:titanium_ingot',
        material:'titanium',
        smeltingLevel:'4 f',
        type:'ingot'
    })
    
    materialList.push({ //54
        base:'gtceu:tungsten_ingot',
        material:'tungsten',
        smeltingLevel:'5 f',
        type:'ingot'
    })

    materialList.push({ //55
        base:'gtceu:uranium_ingot',
        material:'uranium',
        type:'ingot'
    })

    materialList.push({ //56
        base:'gtceu:uranium_235_ingot',
        material:'uranium_235',
        type:'ingot'
    })

    materialList.push({ //57
        base:'gtceu:vanadium_ingot',
        material:'vanadium',
        smeltingLevel:'3 f',
        type:'ingot'
    })

    materialList.push({ //58
        base:'gtceu:yttrium_ingot',
        material:'yttrium',
        smeltingLevel:'3 f',
        type:'ingot'
    })

    materialList.push({ //59
        base:'gtceu:zinc_ingot',
        material:'zinc',
        flags:['easy_crush'],
        type:'ingot'
    })

    materialList.push({ //60
        base:'gtceu:naquadah_ingot',
        material:'naquadah',
        smeltingLevel:'6 f',
        type:'ingot'
    })

    materialList.push({ //61
        base:'gtceu:enriched_naquadah_ingot',
        material:'enriched_naquadah',
        smeltingLevel:'6 f',
        type:'ingot'
    })

    materialList.push({ //62
        base:'gtceu:neutronium_ingot',
        material:'neutronium',
        type:'ingot'
    })

    materialList.push({ //63
        base:'gtceu:tritanium_ingot',
        material:'tritanium',
        type:'ingot'
    })

    materialList.push({ //64
        base:'gtceu:duranium_ingot',
        material:'duranium',
        type:'ingot'
    })

    materialList.push({ //65
        base:'gtceu:trinium_ingot',
        material:'trinium',
        smeltingLevel:'7 f',
        type:'ingot'
    })

    materialList.push({ //66
        base:'gtceu:annealed_copper_ingot',
        material:'annealed_copper',
        type:'ingot',
        flags:'easy_crush'
    })

    materialList.push({ //67
        base:'gtceu:steel_ingot',
        material:'steel',
        smeltingLevel: '3',
        flags: 'easy_crush',
        type:'ingot'
    })

    materialList.push({ //68
        base:'gtceu:wrought_iron_ingot',
        material:'wrought_iron',
        flags:['easy_crush'],
        type:'ingot'
    })

    materialList.push({ //69
        base:'gtceu:graphene_ingot',
        material:'graphene',
        type:'ingot'
    })

    materialList.push({ //70
        base:'gtceu:silicon_rubber_ingot',
        material:'silicon_rubber',
        smeltingLevel:'extruder',
        type:'ingot'
    })

    materialList.push({ //71
        base:'gtceu:polyethylene_ingot',
        material:'polyethylene',
        smeltingLevel:'extruder',
        type:'ingot'
    })

    materialList.push({ //72
        base:'gtceu:raw_rubber_ingot',
        material:'raw_rubber',
        smeltingLevel:'extruder',
        type:'ingot'
    })
    
    materialList.push({ //73
        base:'gtceu:reinforced_epoxy_resin_ingot',
        material:'reinforced_epoxy_resin',
        smeltingLevel:'extruder',
        type:'ingot'
    })

    materialList.push({ //74
        base:'gtceu:polyvinyl_chloride_ingot',
        material:'polyvinyl_chloride',
        smeltingLevel:'extruder',
        type:'ingot'
    })

    materialList.push({ //75
        base:'gtceu:polyphenylene_sulfide_ingot',
        material:'polyphenylene_sulfide',
        smeltingLevel:'extruder',
        type:'ingot'
    })

    materialList.push({ //76
        base:'gtceu:polybenzimidazole_ingot',
        material:'polybenzimidazole_sulfide',
        smeltingLevel:'extruder',
        type:'ingot'
    })

    materialList.push({ //77
        base:'minecraft:netherite_ingot',
        material: 'netherite',
        type:'ingot',
        alloy:{
            ingredients:['minecraft:netherite_scrap', 4, 3, 4],
            result:1,
            level:0
        }
    })

    materialList.push({ //78
        base:'alltheores:lumium_ingot',
        material: 'lumium',
        type:'ingot',
        alloy:{
            ingredients:[192, 2, 52, 3, 49, 1],
            result:4,
            level:1
        }
    })
    
    materialList.push({ //79
        base:'enderio:energetic_alloy_ingot',
        material: 'energetic_alloy',
        type:'ingot',
        alloy:{
            ingredients:[192, 1, 3, 1, 191, 1],
            result:1,
            level:5
        }
    })

    materialList.push({ //80
        base:'enderio:vibrant_alloy_ingot',
        material: 'vibrant_alloy',
        type:'ingot',
        alloy:{
            ingredients:[199, 1, 79, 1],
            result:1,
            level:5
        }
    })

    materialList.push({ //81
        base:'enderio:soularium_ingot',
        material: 'soularium',
        type:'ingot',
        alloy:{
            ingredients:['minecraft:soul_sand', 1, 3, 1],
            result:1,
            level:5
        }
    })
    
    materialList.push({ //82
        base:'enderio:end_steel_ingot',
        material: 'end_steel',
        type:'ingot',
        alloy:{
            ingredients:['minecraft:end_stone', 1, 'minecraft:obsidian', 1, 167, 1],
            result:1,
            level:5
        }
    })
    
    materialList.push({ //83
        base:'extendedcrafting:black_iron_ingot',
        material: 'black_iron',
        type:'ingot',
        alloy:{
            ingredients:[1, 1, '#forge:dyes/black', 1],
            result:1,
            level:0
        }
    })

    materialList.push({ //84
        base:'extendedcrafting:redstone_ingot',
        material: 'redstone_ingot',
        type:'ingot',
        alloy:{
            ingredients:[1, 1, 191, 1],
            result:1,
            level:0
        }
    })

    materialList.push({ //85
        base:'extendedcrafting:enhanced_redstone_ingot',
        material:'enhanced_redstone_ingot',
        smeltingLevel:'extruder',
        type:'ingot'
    })

    materialList.push({ //86
        base:'extendedcrafting:ender_ingot',
        material: 'ender_ingot',
        type:'ingot',
        alloy:{
            ingredients:[1, 1, 170, 1, 199, 1],
            result:1,
            level:0
        }
    })

    materialList.push({ //87
        base:'gtceu:battery_alloy_ingot',
        material: 'battery_alloy',
        type:'ingot',
        alloy:{
            ingredients:[34, 4, 28, 1],
            result:5,
            level:2
        }
    })

    materialList.push({ //88
        base:'gtceu:brass_ingot',
        material: 'brass',
        type:'ingot',
        alloy:{
            ingredients:[2, 3, 59, 1],
            result:4,
            level:1
        },
        flags:['easy_crush']
    })

    materialList.push({ //89
        base:'gtceu:bronze_ingot',
        material: 'bronze',
        type:'ingot',
        alloy:{
            ingredients:[2, 3, 52, 1],
            result:4,
            level:1
        },
        flags:['easy_crush']
    })

    materialList.push({ //90
        base:'gtceu:cupronickel_ingot',
        material: 'cupronickel',
        type:'ingot',
        alloy:{
            ingredients:[2, 1, 38, 1],
            result:2,
            level:3
        }
    })

    materialList.push({ //91
        base:'gtceu:electrum_ingot',
        material: 'electrum',
        type:'ingot',
        alloy:{
            ingredients:[3, 1, 49, 1],
            result:2,
            level:2
        },
        flags:['easy_crush']
    })

    materialList.push({ //92
        base:'gtceu:invar_ingot',
        material: 'invar',
        type:'ingot',
        alloy:{
            ingredients:[1, 2, 38, 1],
            result:3,
            level:2
        },
        flags:['easy_crush']
    })

    materialList.push({ //93
        base:'gtceu:kanthal_ingot',
        material: 'kanthal',
        type:'ingot',
        alloy:{
            ingredients:[1, 1, 22, 1, 27, 1],
            result:3,
            level:4
        },
        smeltingLevel:'4 f'
    })

    materialList.push({ //94
        base:'gtceu:magnalium_ingot',
        material: 'magnalium',
        type:'ingot',
        alloy:{
            ingredients:[193, 1, 22, 2],
            result:3,
            level:2
        }
    })

    materialList.push({ //95
        base:'gtceu:nichrome_ingot',
        material: 'nichrome',
        type:'ingot',
        alloy:{
            ingredients:[38, 4, 27, 1],
            result:5,
            level:4
        },
        smeltingLevel:'4 f'
    })

    materialList.push({ //96
        base:'gtceu:niobium_nitride_ingot',
        material: 'niobium_nitride',
        type:'ingot',
        alloy:{
            ingredients:[39, 1, 53, 1],
            result:2,
            level:7
        },
        smeltingLevel:'3 f'
    })

    materialList.push({ //97
        base:'gtceu:niobium_nitride_ingot',
        material: 'niobium_nitride',
        type:'ingot',
        smeltingLevel:'3 f'
    })

    materialList.push({ //98
        base:'gtceu:niobium_titanium_ingot',
        material: 'niobium_titanium',
        type:'ingot',
        alloy:{
            ingredients:[39, 1, 53, 1],
            result:2,
            level:7
        },
        smeltingLevel:'3 f'
    })

    materialList.push({ //99
        base:'gtceu:sterling_silver_ingot',
        material: 'sterling_silver',
        type:'ingot',
        alloy:{
            ingredients:[2, 1, 49, 4],
            result:5,
            level:4
        },
        smeltingLevel:'2'
    })

    materialList.push({ //100
        base:'gtceu:rose_gold_ingot',
        material: 'rose_gold',
        type:'ingot',
        alloy:{
            ingredients:[2, 1, 3, 4],
            result:5,
            level:4
        },
        smeltingLevel:'2'
    })

    materialList.push({ //101
        base:'gtceu:black_bronze_ingot',
        material: 'black_bronze',
        type:'ingot',
        alloy:{
            ingredients:[2, 3, 91, 2],
            result:5,
            level:2
        },
        smeltingLevel:'2 f'
    })

    materialList.push({ //102
        base:'gtceu:bismuth_bronze_ingot',
        material: 'bismuth_bronze',
        type:'ingot',
        alloy:{
            ingredients:[26, 1, 89, 4],
            result:5,
            level:2
        },
        smeltingLevel:'2'
    })

    materialList.push({ //103
        base:'gtceu:rtm_alloy_ingot',
        material: 'rtm_alloy',
        type:'ingot',
        alloy:{
            ingredients:[46, 4, 54, 2, 36, 1],
            result:7,
            level:6
        },
        smeltingLevel:'4 f'
    })

    materialList.push({ //104
        base:'gtceu:ruridit_ingot',
        material: 'ruridit',
        type:'ingot',
        alloy:{
            ingredients:[46, 2, 33, 1],
            result:3,
            level:7
        },
        smeltingLevel:'4 f'
    })

    materialList.push({ //105
        base:'gtceu:soldering_alloy_ingot',
        material: 'soldering_alloy',
        type:'ingot',
        alloy:{
            ingredients:[52, 6, 34, 3, 24, 1],
            result:10,
            level:2
        }
    })

    materialList.push({ //106
        base:'gtceu:stainless_steel_ingot',
        material: 'stainless_steel',
        type:'ingot',
        alloy:{
            ingredients:[1, 6, 38, 1, 35, 1, 27, 1],
            result:9,
            level:4
        },
        smeltingLevel:'3'
    })

    materialList.push({ //107
        base:'gtceu:tin_alloy_ingot',
        material: 'tin_alloy',
        type:'ingot',
        alloy:{
            ingredients:[52, 1, 1, 1],
            result:2,
            level:1
        }
    })

    materialList.push({ //108
        base:'gtceu:ultimet_ingot',
        material: 'ultimet',
        type:'ingot',
        alloy:{
            ingredients:[28, 5, 27, 2, 38, 1, 36, 1],
            result:9,
            level:5
        },
        smeltingLevel:'3 f'
    })
    
    materialList.push({ //109
        base:'gtceu:vanadium_gallium_ingot',
        material: 'vanadium_gallium',
        type:'ingot',
        alloy:{
            ingredients:[57, 3, 31, 1],
            result:4,
            level:6
        },
        smeltingLevel:'4 f'
    })

    materialList.push({ //110
        base:'gtceu:yttrium_barium_cuprate_ingot',
        material: 'yttrium_barium_cuprate',
        type:'ingot',
        smeltingLevel:'2 f'
    })

    materialList.push({ //111
        base:'gtceu:osmiridium_ingot',
        material: 'osmiridium',
        type:'ingot',
        alloy:{
            ingredients:[40, 1, 33, 3],
            result:4,
            level:8
        },
        smeltingLevel:'6 f'
    })

    materialList.push({ //112
        base:'gtceu:gallium_arsenide_ingot',
        material: 'gallium_arsenide',
        type:'ingot',
        alloy:{
            ingredients:[31, 1, 'gtceu:arsenic_dust', 1],
            result:1,
            level:2
        },
        smeltingLevel:'2'
    })

    materialList.push({ //113
        base:'gtceu:nickel_zinc_ferrite_ingot',
        material: 'nickel_zinc_ferrite',
        type:'ingot'
    })

    materialList.push({ //114
        base:'gtceu:magnetic_iron_ingot',
        material: 'magnetic_iron',
        type:'ingot',
        smeltingLevel: 'impossible'
    })

    materialList.push({ //115
        base:'gtceu:tungsten_carbide_ingot',
        material: 'tungsten_carbide',
        type:'ingot',
        alloy:{
            ingredients:[54, 1, 197, 1],
            result:2,
            level:6
        },
        smeltingLevel:'3 f'
    })

    materialList.push({ //116
        base:'gtceu:magnetic_neodymium_ingot',
        material: 'magnetic_neodymium',
        type:'ingot',
        smeltingLevel: 'impossible'
    })

    materialList.push({ //117
        base:'gtceu:magnetic_samarium_ingot',
        material: 'magnetic_samarium',
        type:'ingot',
        smeltingLevel: 'impossible'
    })

    materialList.push({ //118
        base:'gtceu:manganese_phosphide_ingot',
        material: 'manganese_phosphide',
        type:'ingot',
        alloy:{
            ingredients:[35, 1, 194, 1],
            result:2,
            level:3
        },
        smeltingLevel:'2'
    })

    materialList.push({ //119
        base:'gtceu:magnesium_diboride_ingot',
        material: 'magnesium_diboride',
        type:'ingot',
        alloy:{
            ingredients:[94, 1, 195, 2],
            result:3,
            level:4
        },
        smeltingLevel:'3 f'
    })
    
    materialList.push({ //120
        base:'gtceu:mercury_barium_calcium_cuprate_ingot',
        material: 'mercury_barium_calcium_cuprate',
        type:'ingot',
        smeltingLevel: '3 f'
    })

    materialList.push({ //121
        base:'gtceu:uranium_triplatinum_ingot',
        material: 'uranium_triplatinum',
        type:'ingot',
        alloy:{
            ingredients:[55, 1, 42, 3],
            result:4,
            level:6
        },
        smeltingLevel:'4 f'
    })

    materialList.push({ //122
        base:'gtceu:samarium_iron_arsenic_oxide_ingot',
        material: 'samarium_iron_arsenic_oxide',
        type:'ingot',
        smeltingLevel:'4 f'
    })

    materialList.push({ //123
        base:'gtceu:indium_tin_barium_titanium_cuprate_ingot',
        material: 'indium_tin_barium_titanium_cuprate',
        type:'ingot',
        smeltingLevel:'5 f'
    })

    materialList.push({ //124
        base:'gtceu:uranium_rhodium_dinaquadide_ingot',
        material: 'uranium_rhodium_dinaquadide',
        type:'ingot',
        alloy:{
            ingredients:[55, 1, 45, 1, 60, 2],
            result:4,
            level:9
        },
        smeltingLevel:'5 f'
    })

    materialList.push({ //125
        base:'gtceu:enriched_naquadah_trinium_europium_duranide_ingot',
        material: 'enriched_naquadah_trinium_europium_duranide',
        type:'ingot',
        alloy:{
            ingredients:[61, 4, 65, 3, 30, 2, 64, 1],
            result:10,
            level:10
        },
        smeltingLevel:'6 f'
    })

    materialList.push({ //126
        base:'gtceu:ruthenium_trinium_americium_neutronate_ingot',
        material: 'ruthenium_trinium_americium_neutronate',
        type:'ingot',
        alloy:{
            ingredients:[46, 1, 65, 2, 23, 1, 62, 2],
            result:6,
            level:10
        },
        smeltingLevel:'2 f'
    })

    materialList.push({ //127
        base:'gtceu:ruthenium_trinium_americium_neutronate_ingot',
        material: 'ruthenium_trinium_americium_neutronate',
        type:'ingot',
        alloy:{
            ingredients:[46, 1, 65, 2, 23, 1, 62, 2],
            result:6,
            level:10
        },
        smeltingLevel:'2 f'
    })

    materialList.push({ //128
        base:'gtceu:polyvinyl_butyral_ingot',
        material: 'polyvinyl_butryral',
        type:'ingot',
        smeltingLevel:'optional_extruder'
    })
    
    materialList.push({ //129
        base:'gtceu:black_steel_ingot',
        material: 'black_steel',
        type:'ingot',
        alloy:{
            ingredients:[101, 1, 38, 1, 67, 3],
            result:5,
            level:3
        },
        smeltingLevel:'2'
    })

    materialList.push({ //130
        base:'gtceu:damascus_steel_ingot',
        material: 'damascus_steel',
        type:'ingot',
        smeltingLevel:'2'
    })

    materialList.push({ //131
        base:'gtceu:tungsten_steel_ingot',
        material: 'tungsten_steel',
        type:'ingot',
        alloy:{
            ingredients:[67, 1, 54, 1],
            result:2,
            level:5
        },
        smeltingLevel:'4 f'
    })

    materialList.push({ //132
        base:'gtceu:cobalt_brass_ingot',
        material: 'cobalt_brass',
        type:'ingot',
        alloy:{
            ingredients:[88, 7, 22, 1, 28, 1],
            result:9,
            level:2
        }
    })

    materialList.push({ //133
        base:'gtceu:magnetic_steel_ingot',
        material: 'magnetic_steel',
        type:'ingot',
        smeltingLevel:'impossible'
    })

    materialList.push({ //134
        base:'gtceu:vanadium_steel_ingot',
        material: 'vanadium_steel',
        type:'ingot',
        alloy:{
            ingredients:[67, 7, 57, 1, 27, 1],
            result:9,
            level:4
        },
        smeltingLevel:'2'
    })

    materialList.push({ //135
        base:'gtceu:potin_ingot',
        material: 'potin_ingot',
        type:'ingot',
        alloy:{
            ingredients:[2, 6, 52, 2, 34, 1],
            result:9,
            level:1
        }
    })

    materialList.push({ //136
        base:'gtceu:naquadah_alloy_ingot',
        material: 'naquadah_alloy',
        type:'ingot',
        alloy:{
            ingredients:[60, 2, 111, 1, 65, 1],
            result:4,
            level:6
        },
        smeltingLevel:'6 f'
    })

    materialList.push({ //137
        base:'gtceu:rhodium_plated_palladium_ingot',
        material: 'rhodium_plated_palladium',
        type:'ingot',
        alloy:{
            ingredients:[41, 3, 45, 1],
            result:4,
            level:6
        },
        smeltingLevel:'5 f'
    })

    materialList.push({ //138
        base:'gtceu:red_steel_ingot',
        material: 'red_steel',
        type:'ingot',
        alloy:{
            ingredients:[99, 1, 102, 1, 129, 4, 67, 2],
            result:8,
            level:2
        },
        smeltingLevel:'3'
    })

    materialList.push({ //139
        base:'gtceu:blue_steel_ingot',
        material: 'blue_steel',
        type:'ingot',
        alloy:{
            ingredients:[100, 1, 88, 1, 129, 4, 67, 2],
            result:8,
            level:2
        },
        smeltingLevel:'3'
    })

    materialList.push({ //140
        base:'gtceu:hssg_ingot',
        material: 'hssg_ingot',
        type:'ingot',
        alloy:{
            ingredients:[131, 5, 27, 1, 36, 2, 57, 1],
            result:9,
            level:5
        },
        smeltingLevel:'4 f'
    })

    materialList.push({ //141
        base:'gtceu:red_alloy_ingot',
        material: 'red_alloy',
        type:'ingot',
        alloy:{
            ingredients:[2, 1, 191, 4],
            result:5,
            level:2
        }
    })

    materialList.push({ //142
        base:'gtceu:hsse_ingot',
        material: 'hsse_ingot',
        type:'ingot',
        alloy:{
            ingredients:[140, 6, 28, 1, 35, 1, 48, 1],
            result:9,
            level:6
        },
        smeltingLevel:'4 f'
    })

    materialList.push({ //143
        base:'gtceu:hsss_ingot',
        material: 'hsss_ingot',
        type:'ingot',
        alloy:{
            ingredients:[140, 6, 33, 2, 40, 1],
            result:9,
            level:6
        },
        smeltingLevel:'4 f'
    })

    materialList.push({ //144
        base:'gtceu:blue_alloy_ingot',
        material: 'blue_alloy',
        type:'ingot',
        alloy:{
            ingredients:[196, 4, 49, 1],
            result:5,
            level:2
        }
    })

    materialList.push({ //145
        base:'gtceu:tantalum_carbide_ingot',
        material: 'tantalum_carbide',
        type:'ingot',
        alloy:{
            ingredients:[50, 1, 197, 1],
            result:2,
            level:6
        },
        smeltingLevel:'4 f'
    })

    materialList.push({ //146
        base:'gtceu:hsla_steel_ingot',
        material: 'hsla_steel',
        type:'ingot',
        alloy:{
            ingredients:[92, 2, 57, 1, 53, 1, 36, 1],
            result:5,
            level:4
        },
        smeltingLevel:'3'
    })

    materialList.push({ //147
        base:'gtceu:molybdenum_disilicide_ingot',
        material: 'molybdenum_disilicide',
        type:'ingot',
        alloy:{
            ingredients:[36, 1, 48, 2],
            result:3,
            level:5
        },
        smeltingLevel:'4 f'
    })

    materialList.push({ //148
        base:'gtceu:zeron_100_ingot',
        material: 'zeron_100',
        type:'ingot',
        smeltingLevel:'4 f'
    })

    materialList.push({ //149
        base:'gtceu:watertight_steel_ingot',
        material: 'watertight_steel',
        type:'ingot',
        smeltingLevel:'4 f'
    })

    materialList.push({ //150
        base:'gtceu:incoloy_ma_956_ingot',
        material: 'incoloy_ma_956',
        type:'ingot',
        smeltingLevel:'4 f'
    })

    materialList.push({ //151
        base:'gtceu:maraging_steel_300_ingot',
        material: 'maraging_steel_300',
        type:'ingot',
        smeltingLevel:'4 f'
    })

    materialList.push({ //152
        base:'gtceu:hastelloy_x_ingot',
        material: 'hastelloy_x',
        type:'ingot',
        smeltingLevel:'4 f'
    })

    materialList.push({ //153
        base:'gtceu:stellite_100_ingot',
        material: 'stellite_100',
        type:'ingot',
        smeltingLevel:'4 f'
    })

    materialList.push({ //154
        base:'gtceu:titanium_carbide_ingot',
        material: 'titanium_carbide',
        type:'ingot',
        alloy:{
            ingredients:[53, 1, 197, 1],
            result:2,
            level:5
        },
        smeltingLevel:'4 f'
    })

    materialList.push({ //155
        base:'gtceu:titanium_tungsten_carbide_ingot',
        material: 'titanium_tungsten_carbide',
        type:'ingot',
        smeltingLevel:'4 f'
    })

    materialList.push({ //156
        base:'gtceu:hastelloy_c_276_ingot',
        material: 'hastelloy_c_276',
        type:'ingot',
        smeltingLevel:'4 f'
    })

    materialList.push({ //157
        base:'gtceu:arlemite_ingot',
        material: 'arlemite',
        type:'ingot'
    })

    materialList.push({ //158
        base:'gtceu:rupee_ingot',
        material: 'rupee',
        type:'ingot'
    })

    materialList.push({ //159
        base:'gtceu:realmite_ingot',
        material: 'realmite',
        type:'ingot'
    })

    materialList.push({ //160
        base:'gtceu:torridite_ingot',
        material: 'torridite',
        type:'ingot'
    })

    materialList.push({ //161
        base:'gtceu:zeiton_ingot',
        material: 'zeiton',
        type:'ingot'
    })

    materialList.push({ //162
        base:'gtceu:draconium_ingot',
        material: 'draconium',
        type:'ingot'
    })

    materialList.push({ //162
        base:'gtceu:draconium_ingot',
        material: 'draconium',
        type:'ingot'
    })

    materialList.push({ //163
        base:'gtceu:copper_alloy_ingot',
        material: 'copper_alloy',
        type:'ingot',
        alloy:{
            ingredients:[2, 1, 48, 1],
            result:1,
            level:5
        }
    })

    materialList.push({ //164
        base:'gtceu:redstone_alloy_ingot',
        material: 'redstone_alloy',
        type:'ingot',
        alloy:{
            ingredients:[191, 1, 48, 1],
            result:1,
            level:5
        }
    })

    materialList.push({ //165
        base:'gtceu:conductive_alloy_ingot',
        material: 'conductive_alloy',
        type:'ingot',
        alloy:{
            ingredients:[191, 1, 2, 1, 1, 1],
            result:1,
            level:5
        }
    })

    materialList.push({ //166
        base:'gtceu:pulsating_alloy_ingot',
        material: 'pulsating_alloy',
        type:'ingot',
        alloy:{
            ingredients:[199, 1, 1, 1],
            result:1,
            level:5
        }
    })

    materialList.push({ //167
        base:'gtceu:dark_steel_ingot',
        material: 'dark_steel',
        type:'ingot',
        alloy:{
            ingredients:[1, 1, 206, 1, 'minecraft:obsidian', 1],
            result:1,
            level:5
        }
    })

    materialList.push({ //168
        base:'divinerpg:shadow_bar',
        material:'shadow',
        type:'ingot',
        alloy:{
            ingredients:[158, 1, 157, 1],
            result:1,
            level:0
        }
    })

    materialList.push({ //169
        base:'gtceu:signalum_ingot',
        material: 'signalum',
        type:'ingot',
        alloy:{
            ingredients:[3, 1, 49, 1, 191, 4],
            result:4,
            level:2
        }
    })

    materialList.push({ //170
        base:'gtceu:enderium_ingot',
        material: 'enderium',
        type:'ingot',
        alloy:{
            ingredients:[34, 3, 207, 1, 199, 2],
            result:2,
            level:2
        }
    })

    materialList.push({ //171
        base:'gtceu:garnite_ingot',
        material: 'garnite',
        type:'ingot'
    })

    materialList.push({ //172
        base:'gtceu:oxdrite_ingot',
        material: 'oxdrite',
        type:'ingot'
    })

    materialList.push({ //173
        base:'gtceu:spectrite_ingot',
        material: 'spectrite',
        type:'ingot'
    })

    materialList.push({ //174
        base:'gtceu:zitrite_ingot',
        material: 'zitrite',
        type:'ingot'
    })
    
    materialList.push({ //175
        base:'gtceu:desh_ingot',
        material: 'desh',
        type:'ingot'
    })

    materialList.push({ //176
        base:'gtceu:ostrum_ingot',
        material: 'ostrum',
        type:'ingot'
    })

    materialList.push({ //177
        base:'gtceu:calorite_ingot',
        material: 'calorite',
        type:'ingot'
    })

    materialList.push({ //178
        base:'gtceu:falsite_ingot',
        material: 'falsite',
        type:'ingot'
    })

    materialList.push({ //179
        base:'gtceu:ventium_ingot',
        material: 'ventium',
        type:'ingot'
    })

    materialList.push({ //180
        base:'gtceu:horizonite_ingot',
        material: 'horizonite',
        type:'ingot'
    })

    materialList.push({ //181
        base:'megacells:sky_steel_ingot',
        material: 'sky_steel',
        type:'ingot'
    })

    materialList.push({ //182
        base:'naturesaura:infused_iron',
        block:'naturesaura:infused_iron_block',
        type:'ingot'
    })

    materialList.push({ //183
        base:'naturesaura:sky_ingot',
        block:'naturesaura:sky_ingot_block',
        type:'ingot'
    })

    materialList.push({ //184
        base:'naturesaura:tainted_gold',
        block:'naturesaura:tainted_gold_block',
        type:'ingot'
    })

    materialList.push({ //185
        base:'naturesaura:depth_ingot',
        material: 'naturesaura:depth_ingot_block',
        type:'ingot',
        alloy:{
            ingredients:[184, 2, 183, 2, 'minecraft:netherite_scrap', 1],
            result:1,
            level:0
        }
    })

    materialList.push({ //186
        base:'pneumaticcraft:ingot_iron_compressed',
        material:'compressed_iron',
        type:'ingot'
    })

    materialList.push({ //187
        base:'draconicevolution:awakened_draconium_ingot',
        material:'draconium_awakened',
        type:'ingot'
    })

    materialList.push({ //188
        base:'twilightforest:ironwood_ingot',
        material:'ironwood',
        type:'ingot'
    })

    materialList.push({ //189
        base:'twilightforest:knightmetal_ingot',
        material:'knightmetal',
        type:'ingot'
    })

    materialList.push({ //190
        base:'twilightforest:fiery_ingot',
        material:'fiery_ingot',
        type:'ingot'
    })

    materialList.push({ //191
        base:'minecraft:redstone',
        material:'redstone',
        type:'dust'
    })

    materialList.push({ //192
        base:'minecraft:glowstone_dust',
        material:'glowstone',
        type:'dust'
    })

    materialList.push({ //193
        base:'gtceu:magnesium_dust',
        material:'magnesium',
        type:'dust'
    })

    materialList.push({ //194
        base:'gtceu:phosphorus_dust',
        material:'phosphorus',
        type:'dust'
    })

    materialList.push({ //195
        base:'gtceu:boron_dust',
        material:'boron',
        type:'dust'
    })

    materialList.push({ //196
        base:'gtceu:electrotine_dust',
        material: 'electrotine',
        type:'ingot',
        alloy:{
            ingredients:[191, 1, 91, 1],
            result:1,
            level:2
        }
    })

    materialList.push({ //197
        base:'gtceu:carbon_dust',
        material:'carbon',
        type:'dust'
    })

    materialList.push({ //198
        base:'ae2:fluix_crystal',
        material:'fluix',
        type:'gem'
    })

    materialList.push({ //199
        base:'minecraft:ender_pearl',
        material:'ender_pearl',
        type:'gem'
    })

    materialList.push({ //200
        base:'minecraft:quartz',
        material:'nether_quartz',
        type:'gem',
        flags:['easy_crush']
    })

    materialList.push({ //201
        base:'gtceu:almandine_gem',
        material:'almandine',
        type:'gem'
    })

    materialList.push({ //202
        base:'gtceu:andradite_gem',
        material:'andradite',
        type:'gem'
    })

    materialList.push({ //203
        base:'gtceu:blue_topaz_gem',
        material:'blue_topaz',
        type:'gem'
    })

    materialList.push({ //204
        base:'minecraft:charcoal',
        material:'charcoal',
        type:'gem',
        flags:['easy_crush']
    })

    materialList.push({ //205
        base:'gtceu:cinnabar_gem',
        material:'cinnabar',
        type:'gem'
    })

    materialList.push({ //206
        base:'minecraft:coal',
        material:'coal',
        type:'gem',
        flags:['easy_crush']
    })

    materialList.push({ //207
        base:'minecraft:diamond',
        material:'diamond',
        type:'gem'
    })

    materialList.push({ //208
        base:'minecraft:emerald',
        material:'emerald',
        type:'gem'
    })

    materialList.push({ //209
        base:'gtceu:green_sapphire_gem',
        material:'green_sapphire',
        type:'gem'
    })

    materialList.push({ //210
        base:'gtceu:grossular_gem',
        material:'grossular',
        type:'gem'
    })

    materialList.push({ //211
        base:'gtceu:rutile_gem',
        material:'rutile',
        type:'gem'
    })

    materialList.push({ //212
        base:'gtceu:lazurite_gem',
        material:'lazurite',
        type:'gem'
    })

    materialList.push({ //213
        base:'gtceu:pyrope_gem',
        material:'pyrope',
        type:'gem'
    })

    materialList.push({ //214
        base:'gtceu:ruby_gem',
        material:'ruby',
        type:'gem'
    })

    materialList.push({ //215
        base:'gtceu:sapphire_gem',
        material:'sapphire',
        type:'gem'
    })

    materialList.push({ //216
        base:'gtceu:sodalite_gem',
        material:'sodalite',
        type:'gem'
    })

    materialList.push({ //217
        base:'gtceu:coke_gem',
        material:'coke',
        type:'gem',
        flags:'easy_crush'
    })

    materialList.push({ //218
        base:'gtceu:spessartine_gem',
        material:'spessartine',
        type:'gem'
    })

    materialList.push({ //219
        base:'gtceu:topaz_gem',
        material:'topaz',
        type:'gem'
    })

    materialList.push({ //220
        base:'gtceu:uvarovite_gem',
        material:'uvarovite',
        type:'gem'
    })

    materialList.push({ //221
        base:'gtceu:certus_quartz_gem',
        material:'certus_quartz',
        type:'gem'
    })

    materialList.push({ //222
        base:'gtceu:quartzite_gem',
        material:'quartzite',
        type:'gem'
    })

    materialList.push({ //223
        base:'gtceu:ferrite_mixture_dust',
        material: 'ferrite_mixture',
        type:'dust',
        alloy:{
            ingredients:[38, 1, 59, 1, 1, 4],
            result:6,
            level:4
        }
    })

    materialList.push({ //224
        base:'gtceu:malachite_gem',
        material:'malachite',
        type:'gem'
    })

    materialList.push({ //225
        base:'gtceu:lapotron_gem',
        material: 'lapotron',
        type:'gem',
        alloy:{
            ingredients:['gtceu:energium_dust', 3, 229, 2],
            result:6,
            level:4
        }
    })

    materialList.push({ //226
        base:'gtceu:olivine_gem',
        material:'olivine',
        type:'gem'
    })
    
    materialList.push({ //227
        base:'gtceu:opal_gem',
        material:'opal',
        type:'gem'
    })

    materialList.push({ //228
        base:'minecraft:amethyst_shard',
        material:'amethyst',
        type:'gem'
    })

    materialList.push({ //229
        base:'minecraft:lapis_lazuli',
        material:'lapis',
        type:'gem'
    })

    materialList.push({ //230
        base:'gtceu:apatite_gem',
        material:'apatite',
        type:'gem'
    })

    materialList.push({ //231
        base:'gtceu:red_garnet_gem',
        material:'red_garnet',
        type:'gem'
    })

    materialList.push({ //232
        base:'gtceu:yellow_garnet_gem',
        material:'yellow_garnet',
        type:'gem'
    })

    materialList.push({ //233
        base:'gtceu:monazite_gem',
        material:'monazite',
        type:'gem'
    })

    materialList.push({ //234
        base:'gtceu:borosilicate_glass_ingot',
        material: 'borosilicate_glass',
        type:'ingot',
        alloy:{
            ingredients:['gtceu:glass_dust', 7, 195, 1],
            result:8,
            level:2
        }
    })

    materialList.push({ //235
        base:'minecraft:flint',
        material:'flint',
        type:'gem',
        flags:['easy_crush']
    })

    materialList.push({ //236
        base:'minecraft:ender_eye',
        material:'ender_eye',
        type:'gem'
    })

    materialList.push({ //237
        base:'gtceu:rad_away_dust',
        material:'rad_away_dust',
        type:'dust',
        alloy:{
            ingredients:['gtceu:potassium_iodide_dust', 5, 'gtceu:prussian_blue_dust', 3, 'gtceu:diethylenetriaminepentaacetic_acid_dust', 10],
            result:48,
            level:5
        }
    })

    materialList.push({ //238
        base:'gtceu:fluorite_gem',
        material:'fluorite',
        type:'gem'
    })

    materialList.push({ //239
        base:'gtceu:peridot_gem',
        material:'peridot',
        type:'gem'
    })

    materialList.push({ //240
        base:'gtceu:bloodgem_gem',
        material:'bloodgem',
        type:'gem'
    })

    materialList.push({ //241
        base:'gtceu:niter_gem',
        material:'niter',
        type:'gem'
    })

    materialList.push({ //242
        base:'gtceu:dimensional_shard_gem',
        material:'dimensional_shard',
        type:'gem'
    })

    materialList.push({ //243
        base:'gtceu:prosperity_shard_gem',
        material:'prosperity_shard',
        type:'gem'
    })

    materialList.push({ //243
        base:'gtceu:prosperity_shard_gem',
        material:'prosperity_shard',
        type:'gem'
    })

    materialList.push({ //244
        base:'gtceu:photovoltaic_composite_dust',
        material:'photovoltaic_composite',
        type:'dust',
        alloy:{
            ingredients:[229, 1, 167, 1, 48, 1],
            result:1,
            level:1
        }
    })

    materialList.push({ //245
        base:'gtceu:loran_gem',
        material:'loran',
        type:'gem'
    })

    materialList.push({ //246
        base:'gtceu:ignisithe_gem',
        material:'ignisithe',
        type:'gem'
    })

    materialList.push({ //247
        base:'gtceu:glacerythe_gem',
        material:'glacerythe',
        type:'gem'
    })

    materialList.push({ //248
        base:'gtceu:aberythe_gem',
        material:'aberythe',
        type:'gem'
    })

    materialList.push({ //249
        base:'gtceu:incorythe_gem',
        material:'incorythe',
        type:'gem'
    })

    materialList.push({ //250
        base:'gtceu:positite_gem',
        material:'positite',
        type:'gem'
    })

    materialList.push({ //250
        base:'gtceu:negatite_gem',
        material:'negatite',
        type:'gem'
    })

    materialList.push({ //251
        base:'gtceu:aquite_gem',
        material:'aquite',
        type:'gem'
    })

    materialList.push({ //252
        base:'gtceu:diopside_gem',
        material:'diopside',
        type:'gem'
    })

    materialList.push({ //253
        base:'gtceu:charoite_gem',
        material:'charoite',
        type:'gem'
    })

    materialList.push({ //254
        base:'gtceu:ambrosium_gem',
        material:'ambrosium',
        type:'gem'
    })

    materialList.push({ //255
        base:'gtceu:zanite_gem',
        material:'zanite',
        type:'gem'
    })
})
