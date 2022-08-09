const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const kegiatan = ref("");
    const dataKegiatan = ref(["Makan", "Minum"]);
    const tambahKegiatan = () => {
      dataKegiatan.value.push(kegiatan.value);
    };

    const hapusKegiatan = (index) => {
      dataKegiatan.value.slice(index, 1);
    };

    const getDataKegiatan = (kegiatan) => {
      modelUpdate.value = true;
      kegiatan.value = "";
    };
    const updateKegiatan = (index) => {};

    return {
      kegiatan,
      dataKegiatan,
      tambahKegiatan,
      hapusKegiatan,
      updateKegiatan,
      getDataKegiatan,
    };
  },
});

app.mount("#app");
