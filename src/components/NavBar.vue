<script>
export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home', route: '/', disabled: false },
          { title: 'Plans', icon: 'mdi-floor-plan', route: '/plans', disabled: false },
          { title: 'Drivers', icon: 'mdi-bullhorn', route: '/drivers', disabled: false },
          { title: 'Amplifiers', icon: 'mdi-lightning-bolt', route: '/amplifiers', disabled: true },
          { title: 'Conceptors', icon: 'mdi-head-cog', route: '/conceptors', disabled: false },
          { title: 'Signal', icon: 'mdi-sine-wave', route: '/signal', disabled: true },
          { title: 'Tutorials', icon: 'mdi-school', route: '/tutos', disabled: true },
          { title: 'Forum', icon: 'mdi-forum', route: '/forum', disabled: true },
          { title: 'My Account', icon: 'mdi-account', route: '/account', disabled: true },
        ],
        rail: false,
      }
    },
  }
</script>

<template>
   <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/lego/5.jpg"
          title="Unknow User"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item v-for="item in items" :prepend-icon="item.icon" :disabled="item.disabled" :title="item.title" :value="item.title" @click.native="$router.push(item.route)"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>
