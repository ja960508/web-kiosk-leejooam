// import { register } from './api/auth/request';
// import { addCategory } from './api/category/categoryAPI';
// import { addProduct } from './api/product/request';

// export const setTestData = async () => {
//   const stores = ['서브웨이', '스타벅스', '맥도날드'];
//   await Promise.all(
//     stores
//       .map((item, idx) => ({
//         storeId: `store${idx}`,
//         name: item,
//         password: '1234',
//         branchName: '인천',
//       }))
//       .map((store) => {
//         return register(store);
//       }),
//   );

//   const categories = ['커피', '디저트', '디카페인', '책', '총', '공구', '의류'];

//   await Promise.all(
//     categories
//       .map((item, idx) => ({
//         name: item,
//         storeId: String((idx % 3) + 1),
//       }))
//       .map((category) => addCategory(category)),
//   );

//   const product = [
//     '트윅스',
//     'K2',
//     '포카칩',
//     '아메리카노',
//     '카페라떼',
//     '카페모카',
//     '매머드커피',
//     '로지텍 마우스',
//     '자유시간',
//     '핫브레이크',
//     '바닐라라떼',
//     '배도라지 차',
//     '플레인요거트',
//     '딸기 스무디',
//     '바나나 스무디',
//     '에스프레소',
//   ];

//   await Promise.all(
//     product
//       .map((item, idx) => ({
//         name: item,
//         price: String(Math.ceil((Math.random() * 50000) / 1000) * 1000),
//         categoryId: (idx % 7) + 1,
//         thumbnail:
//           'http://www.mmthcoffee.com/data/file/mm_new/thumb-1846184521_FvJity4O_379931970b3062dfc07284d9c27e7471b2e1aeae_216x216.png',
//         productOption: [
//           { type: 'choice', optionName: '온도', content: ['뜨거움', '차가움'] },
//           { type: 'choice', optionName: '사이즈', content: ['큼', '작음'] },
//           { type: 'quantity', optionName: '빨대' },
//         ],
//       }))
//       .map((product) => addProduct(product)),
//   );
// };
export const hello = '';
