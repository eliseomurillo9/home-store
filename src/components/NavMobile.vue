<template>
  <div class="bg-white">
    <div class="bg-blue-main flex">
    <span class="text-white text-xs m-auto py-1"> {{ headerMessage }}</span>
  </div>
    <div class="px-6 py-3 flex justify-between items-center">
      <img
        :src="logoImg"
        alt="logo en forma de casa con el nombre home store"
        class="object-scale-down h-9"
      />
      <MenuButton @click="isMenuOpen = !isMenuOpen"/>
    </div>
    <div class="h-px bg-gray-light"></div>
    <div class="flex justify-between py-2 px-6">
      <div class="flex justify-center items-center gap-2">
        <a
          v-for="(social, index) of socialInformation"
          :key="index"
          :href="social.href"
          ><img :src="social.img" :alt="social.alt" class="h-6" />
        </a>
      </div>
      <div class="flex justify-center items-center gap-4">
        <a href="">
          <svg
            class="h-5 fill-gray hover:fill-blue-main transition ease-in-out"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>profile_round [#1342]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-140.000000, -2159.000000)"
                  fill="#3D4849"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598"
                      id="profile_round-[#1342]"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </a>
        <a href="">
          <svg
            class="h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 2C1.44772 2 1 2.44772 1 3C1 3.55228 1.44772 4 2 4H2.47241C2.92336 4 3.31852 4.30182 3.43717 4.73688L3.85342 6.26312L6 14.1339V16C6 16.6935 6.23533 17.3321 6.63048 17.8402C6.23824 18.2816 6 18.863 6 19.5C6 20.8807 7.11929 22 8.5 22C9.88071 22 11 20.8807 11 19.5C11 19.3288 10.9828 19.1616 10.95 19H14.05C14.0172 19.1616 14 19.3288 14 19.5C14 20.8807 15.1193 22 16.5 22C17.8807 22 19 20.8807 19 19.5C19 19.1715 18.9366 18.8578 18.8215 18.5704C18.934 18.4086 19 18.212 19 18C19 17.4477 18.5523 17 18 17H16.5H9C8.44772 17 8 16.5523 8 16V15H18.236C19.1381 15 19.9285 14.3962 20.1657 13.5258L21.8007 7.52583C22.1473 6.25364 21.1896 5 19.871 5H5.58198L5.3667 4.21065C5.01074 2.90547 3.82526 2 2.47241 2H2ZM16.5 19C16.2239 19 16 19.2239 16 19.5C16 19.7761 16.2239 20 16.5 20C16.7761 20 17 19.7761 17 19.5C17 19.2239 16.7761 19 16.5 19ZM18.236 13H7.7638L6.12743 7H19.871L18.236 13ZM8.5 19C8.22386 19 8 19.2239 8 19.5C8 19.7761 8.22386 20 8.5 20C8.77614 20 9 19.7761 9 19.5C9 19.2239 8.77614 19 8.5 19Z"
                fill="#3D4849"
              ></path>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <SideBarMenuContainer :categories="categories" v-if="isMenuOpen" @toggle-menu="(value) => isMenuOpen = value"/>
  </div> 
</template>
<script>
import logo from '../assets/home-store-black-200.png';
import socialNetworks from '../store/social';
import MenuButton from './buttons/MenuButton.vue';
import SideBarMenuContainer from './SideBarMenuContainer.vue';
import { useStore } from "@nanostores/vue";


export default {
  name: "NavMobile",
  components: {
    MenuButton,
    SideBarMenuContainer
  },
  props: {
    headerMessage: {
      type: String,
      default: "Change me",
    },
    logoImg: {
      type: String,
      default: logo,
    },
    phoneNumber: {
      type: String,
      default: "",
    },
    categories: {
      type: Array,
      default: [],
    },
    isOpenMenu: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
        isMenuOpen: false,
    }
  },
  computed: {
    socialInformation() {
      return useStore(socialNetworks).value;
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = true;
    }
  },
};
</script>
