import net.minecraft.enchantment.Enchantment
import net.minecraft.item.ItemStack


/* Airtight Seal Recipes */
// Industrial Rebreather Kit -> Airtight Seal
mods.enderio.enchanter.recipeBuilder()
	.enchantment(enchantment('advancedrocketry:spacebreathing'))
	.input(item('nomilabs:industrial_rebreather_kit'))
	.amountPerLevel(1)
	.xpCostMultiplier(3) // 27 Levels, 15 Lapis
	.register()

// Recipes for Industrial Rebreather Kit
int airtightId = Enchantment.getEnchantmentID(enchantment('advancedrocketry:spacebreathing'))
ItemStack airtight = item('minecraft:enchanted_book').withNbt(['StoredEnchantments': [['id': (short) airtightId, 'lvl': (short) 1]]])

ItemStack respiration = item('minecraft:enchanted_book')
ItemStack holding = respiration.copy()

respiration.addEnchantment(enchantment('minecraft:respiration'), 1)
holding.addEnchantment(enchantment('cofhcore:holding'), 1)

mods.extendedcrafting.table_crafting.shapedBuilder()
	.tierAdvanced()
	.output(item('nomilabs:industrial_rebreather_kit'))
	.matrix(
		'RMCMR',
		'TAZAT',
		'FDPDF',
		'TAYAT',
		'RXBXR',
	)
	.key('R', ore('ringStyreneButadieneRubber'))
	.key('M', metaitem('carbon.mesh'))
	.key('C', metaitem('gas_collector.mv'))
	.key('T', ore('plateDoubleTitanium'))
	.key('P', item('advancedrocketry:pressuretank', 1)) // Normal Pressure Tank
	.key('Z', respiration)
	.key('F', metaitem('fluid.regulator.ev'))
	.key('A', metaitem('pipeSmallFluidPolytetrafluoroethylene'))
	.key('D', ore('dustQuicklime'))
	.key('Y', holding)
	.key('B', metaitem('chemical_reactor.mv'))
	.key('X', metaitem('duct_tape'))
	.register()

