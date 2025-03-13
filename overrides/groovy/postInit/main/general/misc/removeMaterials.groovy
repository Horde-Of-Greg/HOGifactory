package postInit.main.general.misc

import gregtech.api.unification.material.Material

import static com.nomiceu.nomilabs.groovy.GroovyHelpers.MaterialHelpers.*
import static com.nomiceu.nomilabs.gregtech.material.registry.LabsMaterials.*

// Hide GT Mana Infused/Mithril (Deprecated) from JEI
// Can't remap, as rods cannot be remapped.
hideMaterial(Mithril, false)

// Hide GT Infinity (Deprecated) from JEI
// Can't remap, as double plates cannot be remapped.
hideMaterial(Infinity, false)
