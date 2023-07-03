export const productMixin = {
  data() {
    return {
      products: ["Iphone", "SamSung", "Nokia", "Bphone", "HTC", "Huawei"],
      filterProduct: ""
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(element => {
        return element.match(this.filterProduct);
      });
    }
  }
};
