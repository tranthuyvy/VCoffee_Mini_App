import { atom, selector } from "recoil";
import { getUserInfo } from "zmp-sdk";
import { Product, Variant } from "./models/product";
import { Category } from "./models/category";
import categories from "./mock/categories.json";
import { wait } from "./utils/async";

export const productsState = selector<Product[]>({
  key: "products",
  get: async () => {
    await wait(2000);
    const products = (await import("./mock/product.json")).default;
    const variants = (await import("./mock/variants.json"))
      .default as Variant[];
    return products.map(
      (product) =>
        ({
          ...product,
          variants: variants.filter((variant) =>
            product.variantId.includes(variant.id),
          ),
        }) as Product,
    );
  },
});

export const recommendProductsState = selector<Product[]>({
  key: "recommendProducts",
  get: ({ get }) => {
    const products = get(productsState);
    return products.filter((p) => p.sale);
  },
});

export const userState = selector({
  key: "user",
  get: () =>
    getUserInfo({
      avatarType: "normal",
    }),
});

export const displayNameState = atom({
  key: "displayName",
  default: "",
});

export const selectedCategoryIdState = atom({
  key: "selectedCategoryId",
  default: "coffee",
});

export const categoriesState = selector<Category[]>({
  key: "categories",
  get: () => categories,
});

