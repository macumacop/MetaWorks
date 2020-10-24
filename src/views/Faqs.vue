<template>
  <v-main class="main">
    <div class="contenedorHome mt-12">
      <h4 class="titulos-home">We are usually asked about:</h4>
      <div class="divisor-titulos"></div>
      </div>
      <div class="bgImage">
        <v-expansion-panels elevation="0" flat class="expansionPanel">
          <v-expansion-panel
            elevation="0"
            style="border-bottom: 1px solid #fff !important"
            class="expansionpanel-tittle"
            v-for="(item, i) in items"
            :key="i"
          >
            <v-expansion-panel-header elevation="0">
              {{ item.Nombre }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.Descripcion }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    
  </v-main>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        Nombre: "Q: What do structural steel workers do?",
        Descripcion:
          "A: They work mostly in manufacturing shops building steel structures, along with welders, ironworkers, or boilermakers. Steel structures can involve tanks, vessels, machines, bridges, building components, or other related items. Structural steel fitters layout the patterns for a project on the steel, cut and form the steel, and ensure that all of the parts fit together so that welders, ironworkers, or boilermakers can complete the project.",
      },
      {
        Nombre: "Q: Is steel framing expensive?",
        Descripcion:
          "A: Innovative frame technology now means steel frames for standard building designs can be priced competitively with other quality framing systems.",
      },
      {
        Nombre:
          "Q: If I need to become certified, will I need to do it right away?",
        Descripcion:
          "A: There is normally a time period to allow employers and workers time to become certified or registered as apprentices before any enforcement of the new trade regulation takes place.",
      },
      {
        Nombre: "Q: Why should I build in steel?",
        Descripcion:
          "A: Steel is the product to use to protect long-term investment of the building or structure. It is lightweight and strong, won’t burn and won’t shrink, warp or twist – so the structure is maintained for the future.",
      },
      {
        Nombre: "Q: How important is the Contact Tip in welding?",
        Descripcion:
          "A: Very important. Make sure the gun tip isn’t worn out or that weld spatter is not on the tip near the exit hole. The contact tip in the gun should be perfectly round and just a few thousandths larger than the wire itself. Worn tips are typically oval and can cause an erratic arc from the random electrical connection and physical movement of the wire inside the worn tip. Another point to remember about contact tips is that they should always be threaded completely into the gas diffuser and tightened prior to welding to give a smooth flow of welding current.",
      },
      {
        Nombre: "Q: Are steel frames electrically safe?",
        Descripcion:
          "A: Yes! When installed correctly, steel frames are safe because the frames are earthed. When exposed to a live wire, the earthing will create a short and trip the residual current safety switch reducing the chance of electrocution.",
      },
      {
        Nombre: "Q: Can I build on piers or a concrete slab?",
        Descripcion:
          "A: Steel framing can be fixed directly to a concrete slab, or to steel flooring systems on brick, concrete, or steel piers.",
      },
      {
        Nombre:
          "Q: If I use a steel frame how much flexibility do I have with design?",
        Descripcion:
          "A: Steel frame manufacturers and fabricators can produce almost any one or two level design seen in the Canadian market today. It is possible to produce designs in steel that are difficult to replicate using other materials.",
      },
    ],
  }),
};
</script>