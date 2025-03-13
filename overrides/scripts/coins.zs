import mods.gregtech.recipe.RecipeMap;
import mods.gregtech.material.MaterialRegistry;
import crafttweaker.item.IItemStack;
  

recipes.addShaped(<actuallyadditions:item_misc:16>, [
	[<nomilabs:nomicoin25>, null, <nomilabs:nomicoin25>],
	[null, <nomilabs:nomicoin25>, null],
	[<nomilabs:nomicoin25>, null, <nomilabs:nomicoin25>]]);
recipes.addShapeless(<morefurnaces:furnaceblock:2> * 2, [<morefurnaces:furnaceblock:3>]); 
  
//Stone Widget
recipes.addShaped(<nomilabs:stonewidget>, [
	[null, <nomilabs:stonewidgetup>, null],
	[null, <enderio:item_material:10>, null], 
	[null, <nomilabs:stonewidgetdown>, null]]);
recipes.addShaped(<nomilabs:stonewidgetup>, [
	[<minecraft:stone_slab>, <ore:toolHammer>, <minecraft:stone_slab>],
	[<minecraft:stone>,<minecraft:stone>,<minecraft:stone>], 
	[<minecraft:stone>,<minecraft:stone>,<minecraft:stone>]]);
recipes.addShaped(<nomilabs:stonewidgetdown>, [
	[<minecraft:stone>,<minecraft:stone>,<minecraft:stone>], 
	[<minecraft:stone>,<minecraft:stone>,<minecraft:stone>],
	[<minecraft:stone_slab>, <ore:toolHammer>, <minecraft:stone_slab>]]);
recipes.remove(<enderio:item_material:10>);
recipes.addShaped(<enderio:item_material:10>,[
	[null, <minecraft:stone>, null],
	[<minecraft:stone>, <enderio:item_material:9>, <minecraft:stone>],
	[null, <minecraft:stone>, null]]);

	
	
//Wooden Widget
recipes.addShaped(<nomilabs:woodenwidget>, [
	[null, null, null],
	[<nomilabs:woodwidgetleft>, <enderio:item_material:9>, <nomilabs:woodwidgetright>],
	[null,null,null]]);
recipes.addShaped(<nomilabs:woodwidgetleft>, [
	[<ore:slabWood>,<ore:plankWood>,<ore:plankWood>], 
	[<ore:toolSaw>,<ore:plankWood>,<ore:plankWood>],
	[<ore:slabWood>, <ore:plankWood>, <ore:plankWood>]]);
recipes.addShaped(<nomilabs:woodwidgetright>, [
	[<ore:plankWood>,<ore:plankWood>,<ore:slabWood>], 
	[<ore:plankWood>,<ore:plankWood>,<ore:toolSaw>],
	[<ore:plankWood>,<ore:plankWood>,<ore:slabWood>]]);
recipes.remove(<enderio:item_material:9>);

	
//Alloy Widget
recipes.addShaped(<nomilabs:alloywidget>, [
	[<ore:cableGtSingleCopper>, <metaitem:plateCupronickel>, <ore:cableGtSingleCopper>],
	[<metaitem:plateCupronickel>, <metaitem:gearInvar>, <metaitem:plateCupronickel>], 
	[<ore:cableGtSingleCopper>, <metaitem:plateCupronickel>, <ore:cableGtSingleCopper>]]);


//Ender Widget
recipes.addShaped(<nomilabs:enderwidget>, [
	[<enderio:item_item_conduit>, <metaitem:nomilabs:platePulsatingIron>, <enderio:item_redstone_conduit>],
	[<metaitem:nomilabs:platePulsatingIron>, <metaitem:nomilabs:gearElectricalSteel>, <metaitem:nomilabs:platePulsatingIron>], 
	[<enderio:item_power_conduit>, <metaitem:nomilabs:platePulsatingIron>, <enderio:item_liquid_conduit:1>]]);


recipes.addShaped(<gregtech:rubber_sapling> * 64, [[<nomilabs:nomicoin5>, null, <nomilabs:nomicoin5>],[<nomilabs:nomicoin5>, null, null], [null, null, null]]);
recipes.addShaped(<minecraft:sapling:5> * 64, [[<nomilabs:nomicoin>, <nomilabs:nomicoin>, null],[null, null, null], [<nomilabs:nomicoin>, null, null]]);
recipes.addShaped(<minecraft:sapling:4> * 64, [[<nomilabs:nomicoin>, <nomilabs:nomicoin>, null],[null, null, <nomilabs:nomicoin>], [null, null, null]]);
recipes.addShaped(<minecraft:sapling:1> * 64, [[<nomilabs:nomicoin>, <nomilabs:nomicoin>, null],[null, null, null], [null, <nomilabs:nomicoin>, null]]);
recipes.addShaped(<minecraft:sapling:2> * 64, [[<nomilabs:nomicoin>, <nomilabs:nomicoin>, null],[<nomilabs:nomicoin>, null, null], [null, null, null]]);
recipes.addShaped(<minecraft:clay_ball> * 64, [[<nomilabs:nomicoin>, <nomilabs:nomicoin>, <nomilabs:nomicoin>],[null, null, <nomilabs:nomicoin>], [null, null, null]]);
recipes.addShaped(<actuallyadditions:item_canola_seed> * 32, [[<nomilabs:nomicoin>, <nomilabs:nomicoin>, null],[null, <nomilabs:nomicoin>, null], [null, null, null]]);
recipes.addShaped(<minecraft:sapling> * 64, [[<nomilabs:nomicoin>, <nomilabs:nomicoin>, <nomilabs:nomicoin>],[null, null, null], [null, null, null]]);
recipes.addShaped(<minecraft:reeds> * 32, [[<nomilabs:nomicoin>, null, <nomilabs:nomicoin>],[null, null, null], [null, null, null]]);
recipes.addShaped(<minecraft:cactus> * 32, [[<nomilabs:nomicoin>, null, null],[<nomilabs:nomicoin>, null, null], [null, null, null]]);
recipes.addShaped(<minecraft:potato> * 32, [[<nomilabs:nomicoin>, <nomilabs:nomicoin>, null],[null, null, null], [null, null, null]]);
recipes.addShaped(<minecraft:spawn_egg>.withTag({EntityTag: {id: "minecraft:chicken"}}) * 2, [[null, <nomilabs:nomicoin25>, null],[null, null, null], [null, null, <nomilabs:nomicoin25>]]);
recipes.addShaped(<minecraft:spawn_egg>.withTag({EntityTag: {id: "minecraft:cow"}}) * 2, [[<nomilabs:nomicoin25>, <nomilabs:nomicoin25>, null],[null, null, <nomilabs:nomicoin25>], [null, null, null]]);
recipes.addShaped(<minecraft:spawn_egg>.withTag({EntityTag: {id: "minecraft:pig"}}) * 2, [[<nomilabs:nomicoin25>, null, null],[null, null, <nomilabs:nomicoin25>], [null, null, null]]);
recipes.addShaped(<minecraft:spawn_egg>.withTag({EntityTag: {id: "minecraft:sheep"}}) * 2, [[<nomilabs:nomicoin5>, <nomilabs:nomicoin5>, <nomilabs:nomicoin5>],[<nomilabs:nomicoin5>, null, null], [null, <nomilabs:nomicoin5>, null]]);
recipes.addShapeless(<nomilabs:nomicoin> * 5, [<nomilabs:nomicoin5>]);
recipes.addShapeless(<nomilabs:nomicoin5> * 5, [<nomilabs:nomicoin25>]);
recipes.addShapeless(<nomilabs:nomicoin25> * 4, [<nomilabs:nomicoin100>]);
recipes.addShaped(<nomilabs:nomicoin100>, [[<nomilabs:nomicoin25>, null, <nomilabs:nomicoin25>],[null,null,null], [<nomilabs:nomicoin25>, null, <nomilabs:nomicoin25>]]);
recipes.addShaped(<nomilabs:nomicoin25>, [[null, <nomilabs:nomicoin5>, null],[<nomilabs:nomicoin5>, <nomilabs:nomicoin5>, <nomilabs:nomicoin5>], [null, <nomilabs:nomicoin5>, null]]);
recipes.addShaped(<nomilabs:nomicoin5>, [[null, <nomilabs:nomicoin>, null],[<nomilabs:nomicoin>, <nomilabs:nomicoin>, <nomilabs:nomicoin>], [null, <nomilabs:nomicoin>, null]]);

/*
    Airtight Seal books for the low price of 900 Nomicoins!
 */
recipes.addShaped("of_craft_airtight_seal",
    <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 12 as short}]}),
    [[<nomilabs:nomicoin100>, <nomilabs:nomicoin100>, <nomilabs:nomicoin100>],
     [<nomilabs:nomicoin100>, <nomilabs:nomicoin100>, <nomilabs:nomicoin100>],
     [<nomilabs:nomicoin100>, <nomilabs:nomicoin100>, <nomilabs:nomicoin100>]]);
