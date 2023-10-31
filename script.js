const {createApp, ref, computed} = Vue

createApp({
  data() {
      const input1 = ref('');
      const input2 = ref('');
      const hasil_jumlah = computed(() => parseFloat(input1.value) + parseFloat(input2.value));
      const hasil_kurang = computed(() => parseFloat(input1.value) - parseFloat(input2.value));
      const hasil_kali = computed(() => parseFloat(input1.value) * parseFloat(input2.value));
      const hasil_bagi = computed(() => parseFloat(input1.value) / parseFloat(input2.value));
      return {
        input1,
        input2,
        hasil: 0,
        hasil_jumlah,
        hasil_kurang,
        hasil_kali,
        hasil_bagi,
        suka: [
          {
            nama : 'Aditya',
            kelas : 'XII-PMIA1',
            hobi : 'Reading Manga',
            flag : true,
          },
          {
            nama : 'Situmorang',
            kelas : 'XII-PMIA1',
            hobi : 'Watching Anime',
            flag : true,            
          }
        ]
    }
  },
  methods: {
    tooglesuka(i) {
      i.flag = !i.flag;
    }
  },
}).mount('#app')


