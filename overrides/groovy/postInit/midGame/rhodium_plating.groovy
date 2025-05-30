package postInit.midGame

import gregtech.api.recipes.RecipeBuilder
import gregtech.api.recipes.chance.output.impl.ChancedItemOutput

import static gregtech.api.GTValues.*

mods.gregtech.mixer.recipeBuilder()
        .inputs(metaitem('dustPalladium') * 3 ,metaitem('dustLumium') * 2)
        .outputs(metaitem('dustLumiumPalladium') * 5)
        .EUt(VA[IV]).duration(600)
        .buildAndRegister()

mods.gregtech.electric_blast_furnace.recipeBuilder()
        .inputs(metaitem('dustLumiumPalladium'))
        .circuit(1)
        .outputs(metaitem('ingotHotLumiumPalladium'))
        .EUt(VA[IV]).duration(800)
        .property("temperature", 4000)
        .buildAndRegister()

mods.gregtech.electric_blast_furnace.recipeBuilder()
        .inputs(metaitem('dustLumiumPalladium'))
        .fluidInputs(fluid('helium') * 250)
        .circuit(2)
        .outputs(metaitem('ingotHotLumiumPalladium'))
        .EUt(VA[IV]).duration(536)
        .property("temperature", 4000)
        .buildAndRegister()

// Lumium Palladium needs to a seperate material
mods.gregtech.vacuum_freezer.recipeBuilder()
        .inputs(metaitem('ingotHotLumiumPalladium'))
        .outputs(metaitem('ingotLumiumPalladium'))
        .EUt(VA[HV]).duration(357)
        .buildAndRegister()

mods.gregtech.chemical_bath.changeByOutput([fluid('rhodium_sulfate_solution')], null)
        .forEach { ChangeRecipeBuilder builder -> 
          .builder { RecipeBuilder recipe ->
            recipe.fluidInputs(fluid('water') * 6000)
          }
        }

mods.gregtech.electric_blast_furnace.changeByOutput([metaitem('dustRhodiumSalt')], null)
        .forEach { ChangeRecipeBuilder builder -> 
          .builder { RecipeBuilder recipe ->
            recipe.fluidOutputs(fluid('steam') * 288000)
          }
        }

mods.gregtech.eletrolyzer.recipeBuilder()
        .inputs(metaitem('plateLumiumPalladium') * 12)
        .fluidInputs(fluid('rhodium_sulfate_solution') * 2000)
        .outputs(metaitem('plateRhodiumPlatedPalladium'))
        .fluidOutputs(fluid("sulfuric_acid" * 6000, fluid("oxygen") * 6000)
        .EUt(VA[IV]).duration(1200)
        .buildAndRegister()

mods.gregtech.mixer.removeByOutput([metaitem('dustRhodiumPlatedPalladium')]) 
mods.gregtech.electric_blast_furnace.removeByOutput([metaitem('ingotHotRhodiumPlatedPalladium')]) 
mods.gregtech.vacuum_freezer.removeByOutput([metaitem('ingotRhodiumPlatedPalladium')]) 


mods.gregtech.electric_blast_furnace.recipeBuilder()
        .inputs(metaitem('dustRhodium'), metaitem('dustPotassiumPyrosulfate') * 11)
        .outputs(metaitem('dustRecrystalizedRhodiumSulfate') * 3, metaitem('dustPotassiumPyrosulfate') * 14)
        .EUt(VA[HV]).duration(400)
        .buildAndRegister()

mods.gregtech.chemical_bath.recipeBuilder()
        .inputs(metaitem('dustRecrystalizedRhodiumSulfate'))
        .fluidInputs(fluid("water") * 3000)
        .fluidOutputs(fluid("rhodium_sulfate_solution") * 2000)
        .EUt(VA[EV]).duration(300)
        .buildAndRegister()
