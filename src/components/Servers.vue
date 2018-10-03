<template>
<v-layout row>
    <v-flex xs11 sm11>
      <v-card>

        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :inset="item.inset"
              :key="index"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar

            >
              <v-icon v-html="item.icon"></v-icon>

              <v-list-tile-content class="body-2">
                <v-list-tile-title v-html="item.title" class="pl-4"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>

</template>
<script>
export default {
    name: 'Servers',
data () {
    return {
        items: [{
            icon: 'computer',
            title: 'Server #1'
        },
        {
            icon: 'computer',
            title: 'server #2'
        },
        {
            icon: 'computer',
            title: 'server #3'
        },
        {
            icon: 'computer',
            title: 'server #4'
        },
        {
            icon: 'computer',
            title: 'server #5'
        }
        ]
    }
}
}
</script>

<style>

</style>