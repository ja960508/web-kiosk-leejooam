import { storeCreateType } from './domain/store/store.type';
import { categoryCreateType } from './domain/category/category.type';
import { productCreateType } from './domain/product/product.type';
const data = [
  {
    category: '커피',
    menu: [
      {
        title: '아메리카노',
        img: 'http://www.mmthcoffee.com/data/file/mm_coffee/thumb-3546841901_fWNqCpj8_143c53926bf1eab4f92bda344722234f830269e0_216x216.png',
        price: 8000,
      },
      {
        title: '아몬드 아메리카노',
        img: 'http://www.mmthcoffee.com/data/file/mm_coffee/thumb-3546841901_1HBFIxl4_0d724e60d863d7144674ca4879dadb2604ef8371_216x216.png',
        price: 5000,
      },
      {
        title: '꿀커피',
        img: 'http://www.mmthcoffee.com/data/file/mm_coffee/thumb-3553807308_CzuJoe0V_551748c36732ddaa2eee2643ef3b623edff0ae96_216x216.jpg',
        price: 7000,
      },
      {
        title: '꿀라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_coffee/thumb-2040946705_IY6E8eDc_133bf099b7ffb65cf95b222f7c6a29a48dbde86e_216x216.png',
        price: 9000,
      },
      {
        title: '카푸치노',
        img: 'http://www.mmthcoffee.com/data/file/mm_coffee/thumb-3553807308_NU5sbdoL_a695697a7c6882ae9033269f9cfa2f7c39444b4e_216x216.jpg',
        price: 7000,
      },
      {
        title: '카페라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_coffee/thumb-3553807308_2yqXQfEx_d0b98b8a43ba59896baedb64b2f02a36652b9a55_216x216.jpg',
        price: 3000,
      },
      {
        title: '아몬드 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_coffee/thumb-3546841901_Hx02NBZR_dc829c7d0ec3bee82a6cefab5aeea71a0301f549_216x216.png',
        price: 3000,
      },
      {
        title: '바닐라 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_coffee/thumb-3553807308_KuaozbBX_79b2281bfd58e8b1f9d01751452f026ada977c86_216x216.jpg',
        price: 2000,
      },
      {
        title: '카라멜 마키아토',
        img: 'http://www.mmthcoffee.com/data/file/mm_coffee/thumb-3553807308_EqdORUJL_9c4ef991e7addb48c6f76f42bd4b1f3e9be60fd5_216x216.jpg',
        price: 9000,
      },
      {
        title: '카페 모카',
        img: 'http://www.mmthcoffee.com/data/file/mm_coffee/thumb-3546841901_rbQDWmFP_528b84bb051cd78b3c81a61a81f0b8ff7c7465ad_216x216.png',
        price: 4000,
      },
      {
        title: '돌체 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_coffee/thumb-3546841901_4JD2HYP6_cf9e6a2b887d1d7679b6b0521940f0c754f4a70b_216x216.png',
        price: 8000,
      },
      {
        title: '티라미수 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_coffee/thumb-3546841901_uvxqasKz_188f95a31eb70a833360b579a3508c3dc04b2f42_216x216.png',
        price: 8000,
      },
      {
        title: '꿀바나 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_coffee/thumb-3553807308_JwPNkzO7_350ae9f1435c2a576b345535e575353bb9e05bc8_216x216.jpg',
        price: 5000,
      },
      {
        title: '헤이즐넛 커피',
        img: 'http://www.mmthcoffee.com/data/file/mm_coffee/thumb-3553807308_ntMZr4E1_6ded7fb8061c89410336533447423dc1f90d6d46_216x216.jpg',
        price: 8000,
      },
      {
        title: '헤이즐넛 모카',
        img: 'http://www.mmthcoffee.com/data/file/mm_coffee/thumb-3546841901_HFGR47Kl_06c8fc5142a26697649ed47f5867b62cfd1a9bf5_216x216.png',
        price: 7000,
      },
      {
        title: '코코넛 사이공 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_coffee/thumb-3553807308_2ruAOJmn_11f1b7430444b89583de564d1d3b1b953269777e_216x216.jpg',
        price: 7000,
      },
      {
        title: '달고나 카페 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_coffee/thumb-3546841901_lJUtXvdK_4f8ce3fa55fbaef4583d63c3e81742c2a3027164_216x216.png',
        price: 2000,
      },
    ],
  },
  {
    category: '콜드브루',
    menu: [
      {
        title: '콜드브루',
        img: 'http://www.mmthcoffee.com/data/file/mm_brew/3553807308_xv09jobO_c2bfa71ec406afc6a066400aaa2607e499b9fadc.jpg',
        price: 6000,
      },
      {
        title: '아몬드크림 콜드브루',
        img: 'http://www.mmthcoffee.com/data/file/mm_brew/2040946705_xpl1a843_59498f0a3428fc2d29212b0b9378cde3f8d8e8ab.png',
        price: 8000,
      },
      {
        title: '레몬토닉 콜드브루',
        img: 'http://www.mmthcoffee.com/data/file/mm_brew/3553807308_MVT4GSKd_6317c28dac4f3a5f5bb59fc75acd23d668b6dc4f.png',
        price: 7000,
      },
      {
        title: '코코넛 크림 콜드브루 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_brew/3553807308_efUQzsYM_04c01987a3cd0b2210d486e8d8b74111f0598ece.jpg',
        price: 1000,
      },
      {
        title: '콜드브루 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_brew/2040946705_kIAy0SGO_e42a39f74b80c5da314f20e7b89d3093a7692d1c.png',
        price: 9000,
      },
      {
        title: '돌체 콜드브루 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_brew/2040946705_GuIvPTYo_133487cc1e72c62148f0885a274b6b30127d3448.png',
        price: 7000,
      },
      {
        title: '디카페인 콜드브루',
        img: 'http://www.mmthcoffee.com/data/file/mm_brew/2040946705_TPoH4x23_3d32b7a4528f66ea2677a59a5e12ab9c39cd6aee.png',
        price: 5000,
      },
      {
        title: '디카페인 콜드브루 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_brew/2040946705_ynxZdHqB_693192c57d731a47f032862b2ae9ce4b4da3a4ae.png',
        price: 6000,
      },
      {
        title: '디카페인 돌체 콜드브루 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_brew/2040946705_w2lPTuo5_07a7219865883f97ba6dd0e4a1d84d061e2ecf6a.png',
        price: 3000,
      },
      {
        title: '디카페인 아몬드 크림 콜드브루',
        img: 'http://www.mmthcoffee.com/data/file/mm_brew/2040946705_YJ73O1kd_6a42bf8472b2f71c3863db0a00448a82c1805c5d.png',
        price: 7000,
      },
      {
        title: '디카페인 레몬토닉 콜드브루',
        img: 'http://www.mmthcoffee.com/data/file/mm_brew/2040946705_oRcBkMaK_4eb0093f40240f99b74c42f35385eed17acd4b47.png',
        price: 5000,
      },
      {
        title: '디카페인 코코넛크림 콜드브루 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_brew/2040946705_LqHsUYXm_549dc2920c3d8ee5457e9788691397e00ff8ee34.png',
        price: 3000,
      },
    ],
  },
  {
    category: '논커피',
    menu: [
      {
        title: '초코 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_none/thumb-3546841901_pGhlDBEk_f64f00168b96f3a62e151ed439dff7f90fc4f94d_216x216.png',
        price: 3000,
      },
      {
        title: '그린티 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_none/thumb-3546841901_I89QMyto_c7dade474fa3080b9e3024dd6c756f95461fba81_216x216.png',
        price: 1000,
      },
      {
        title: '차이티 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_none/thumb-3553807308_6veYVkRn_5345e95ce340c685b1fa42c8bf695097f3069f4b_216x216.jpg',
        price: 9000,
      },
      {
        title: '콩가루 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_none/thumb-3546841901_sPfhBdk0_97a0e7b9504a2ed9a20c1472614924b25013c3c5_216x216.png',
        price: 3000,
      },
      {
        title: '메론바나 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_none/thumb-3546841901_2NoT8xe1_6b055479756aeab0a7d77b8fae663ed0f0951649_216x216.png',
        price: 6000,
      },
      {
        title: '딸기 크림 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_none/thumb-3553807308_Q8dwUCOa_6fa900c5a7610db8d722fcb2748d2c3ca7f3e2be_216x216.jpg',
        price: 3000,
      },
      {
        title: '옥수수 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_none/thumb-3553807308_1TdUjD86_07f6bcbf3ecf7d37c53e3319453a8e7546b267d6_216x216.jpg',
        price: 9000,
      },
      {
        title: '고구마 라떼',
        img: 'http://www.mmthcoffee.com/data/file/mm_none/thumb-3546841901_kLrNnzZX_9d4ff3a5f4e996ceb55fef5b21fd75df970dd068_216x216.png',
        price: 6000,
      },
    ],
  },
  {
    category: '차',
    menu: [
      {
        title: '얼그레이',
        img: 'http://www.mmthcoffee.com/data/file/mm_tea/thumb-3546841901_zeW0clFZ_a183c9eb47f04ead6991d4c9f21b157a683f9c31_216x216.png',
        price: 5000,
      },
      {
        title: '레몬&오렌지',
        img: 'http://www.mmthcoffee.com/data/file/mm_tea/thumb-3553807308_exJn6RWN_9150567afa450d3319a38014edb860a2c8123e4a_216x216.jpg',
        price: 8000,
      },
      {
        title: '캐모마일',
        img: 'http://www.mmthcoffee.com/data/file/mm_tea/thumb-3553807308_TYZbogOc_e5c4935bd1c974a3ec8cab5bf2147b4a2f5db406_216x216.jpg',
        price: 3000,
      },
      {
        title: '페퍼민트',
        img: 'http://www.mmthcoffee.com/data/file/mm_tea/thumb-3546841901_dHbhVL7p_d1dae29327d62611ae37f8f73b03720a38094c99_216x216.png',
        price: 3000,
      },
      {
        title: '밀크티',
        img: 'http://www.mmthcoffee.com/data/file/mm_tea/thumb-3553807308_vHLmagJj_108f4d898a898a8b426419cd9812897fa8f40b4f_216x216.jpg',
        price: 5000,
      },
      {
        title: '리얼 레몬 티',
        img: 'http://www.mmthcoffee.com/data/file/mm_tea/thumb-3546841901_1sLyG4kJ_66e434934413c7df9224137e5f963ce9a4cd4058_216x216.png',
        price: 3000,
      },
      {
        title: '달고나 밀크티',
        img: 'http://www.mmthcoffee.com/data/file/mm_tea/thumb-3546841901_6YvLcqnu_962d2a2296da14bf53fe3c5d23daab0c91d15947_216x216.png',
        price: 6000,
      },
      {
        title: '페퍼민트 라임 티',
        img: 'http://www.mmthcoffee.com/data/file/mm_tea/thumb-3546841901_Wysh6Mad_6084d4a63062b2abe34ccf385cdbcdddd36984b9_216x216.png',
        price: 5000,
      },
      {
        title: '오렌지 아일랜드 티',
        img: 'http://www.mmthcoffee.com/data/file/mm_tea/thumb-3546841901_ZKGvHTJM_e0bbac298138ff3c46fa87801e74f2670b5cf7c4_216x216.png',
        price: 9000,
      },
      {
        title: '우롱 밀크티',
        img: 'http://www.mmthcoffee.com/data/file/mm_tea/thumb-3546841901_ShtQN1fc_8bc0e51c7d18df3ef909d94f292f87d202056b9a_216x216.png',
        price: 5000,
      },
    ],
  },
  {
    category: '스무디',
    menu: [
      {
        title: '딸기 스무디',
        img: 'http://www.mmthcoffee.com/data/file/mm_smoothie/thumb-3546841901_R6jGrNtC_bb047fc76a5c48748a7dae7bebb37237e4572d34_216x216.png',
        price: 5000,
      },
      {
        title: '복숭아 스무디',
        img: 'http://www.mmthcoffee.com/data/file/mm_smoothie/thumb-3546841901_ixJp4efT_f21659b1fb991789a6b191395e207fe4a62f4373_216x216.png',
        price: 3000,
      },
      {
        title: '플레인 요거트',
        img: 'http://www.mmthcoffee.com/data/file/mm_smoothie/thumb-3546841901_SVrUY3cu_4544fca291851ea72c85cff11289b30f1c1586df_216x216.png',
        price: 4000,
      },
      {
        title: '블루베리 요거트',
        img: 'http://www.mmthcoffee.com/data/file/mm_smoothie/thumb-3546841901_8OJ1V9cb_5a826bb0d9d237af7559d46f69cb2e4237ea0998_216x216.png',
        price: 3000,
      },
      {
        title: '딸기 요거트',
        img: 'http://www.mmthcoffee.com/data/file/mm_smoothie/thumb-3546841901_5z4JtgiT_6705c4beeb39492480eec1cb253fdec0dfa93d11_216x216.png',
        price: 2000,
      },
      {
        title: '복숭아 요거트',
        img: 'http://www.mmthcoffee.com/data/file/mm_smoothie/thumb-3546841901_ek20Xh3N_56315d7924fee6780bfd39c39cf5e31ada3728f0_216x216.png',
        price: 3000,
      },
      {
        title: '코코넛 커피 스무디',
        img: 'http://www.mmthcoffee.com/data/file/mm_smoothie/thumb-3546841901_3q7no2wA_1c735c5ad8ed030589019639ba4a395c80163624_216x216.png',
        price: 8000,
      },
      {
        title: '달고나 밀크 스무디',
        img: 'http://www.mmthcoffee.com/data/file/mm_smoothie/thumb-3546841901_dnF2AEuS_bad1b0eb30eae601c1c5a29c13f6165daddacbb4_216x216.png',
        price: 2000,
      },
    ],
  },
  {
    category: '프라페/쉐이크',
    menu: [
      {
        title: '솜사탕 쉐이크',
        img: 'http://www.mmthcoffee.com/data/file/mm_shake/thumb-3698694435_2WVBjX5w_f7098f3d4169b143f563adcfe1c7f07e872c632c_216x216.png',
        price: 3000,
      },
      {
        title: '쿠앤크 프라페',
        img: 'http://www.mmthcoffee.com/data/file/mm_shake/thumb-3546841901_1B4Eypos_f3f2a2b9ac2392b183470c0146e0288d1e1f7307_216x216.png',
        price: 2000,
      },
      {
        title: '자바칩 프라페',
        img: 'http://www.mmthcoffee.com/data/file/mm_shake/thumb-3546841901_3VUWwNoX_7216b9e7ae3e138a9fbb7cc616d6f54d3d778b9f_216x216.png',
        price: 9000,
      },
      {
        title: '그린티 프라페',
        img: 'http://www.mmthcoffee.com/data/file/mm_shake/thumb-3546841901_2hDAIrye_de1ed36e9a95a6b687aea1b5a9079dd9c13f6ea7_216x216.png',
        price: 2000,
      },
      {
        title: '스트로베리 바닐라 프라페',
        img: 'http://www.mmthcoffee.com/data/file/mm_shake/thumb-3546841901_nFGj4qs2_e9f014ac401ffacb1c26d760062f2bc4a6e8a35a_216x216.png',
        price: 5000,
      },
      {
        title: '피스타치오 프라페',
        img: 'http://www.mmthcoffee.com/data/file/mm_shake/thumb-3546841901_pPmIGMlZ_f70e05d7490423e3a712421f189798c6263b1d89_216x216.png',
        price: 1000,
      },
    ],
  },
  {
    category: '에이드',
    menu: [
      {
        title: '블루레몬 에이드',
        img: 'http://www.mmthcoffee.com/data/file/mm_ade/thumb-3546841901_6Spedq89_4e8207366b9517343d31a45970922a0696d4aa18_216x216.png',
        price: 5000,
      },
      {
        title: '자몽 에이드',
        img: 'http://www.mmthcoffee.com/data/file/mm_ade/thumb-3546841901_fwLNcdJT_1bbae22b378611d056d1aa36ee78b30c5280e81f_216x216.png',
        price: 1000,
      },
      {
        title: '청포도 에이드',
        img: 'http://www.mmthcoffee.com/data/file/mm_ade/thumb-3546841901_BX5Npr7Q_aac945d5d63677686d0b6fe43a739448f3c18bd7_216x216.png',
        price: 1000,
      },
      {
        title: '오렌지 에이드',
        img: 'http://www.mmthcoffee.com/data/file/mm_ade/thumb-3546841901_roKW2ewz_c91ac4adad6babc69a0fb4427b1447fad2d25827_216x216.png',
        price: 5000,
      },
      {
        title: '라임 에이드',
        img: 'http://www.mmthcoffee.com/data/file/mm_ade/thumb-3546841901_egMQaPG2_61d6f4f8d17ed74f668d068e5be927eb5457b958_216x216.png',
        price: 9000,
      },
      {
        title: '파인애플주스',
        img: 'http://www.mmthcoffee.com/data/file/mm_ade/thumb-3546841901_3BLsGn0O_49a625a6ddf1fed90983670f3bed954a4ffdb9e1_216x216.png',
        price: 7000,
      },
      {
        title: '제주 한라봉 에이드',
        img: 'http://www.mmthcoffee.com/data/file/mm_ade/thumb-3546841901_M2iJ9Rq1_78b8940be6e435c1f4314932feca5dd5fce9e92f_216x216.png',
        price: 6000,
      },
      {
        title: '인크레드불',
        img: 'http://www.mmthcoffee.com/data/file/mm_ade/thumb-2040946705_QfronzCW_bf54aac494b0887867669b12d8f616825da0f7a4_216x216.png',
        price: 4000,
      },
      {
        title: '라임레몬 깔라만시 에이드',
        img: 'http://www.mmthcoffee.com/data/file/mm_ade/thumb-3546841901_1DgVNLf2_9c475541523979bcaf60b2779a278fc21f0f9a16_216x216.png',
        price: 7000,
      },
      {
        title: '오미자 크랜베리 에이드',
        img: 'http://www.mmthcoffee.com/data/file/mm_ade/thumb-3546841901_5TOqWczo_a7fce2cf77c1f0cc94509cb4f968318e39b15e84_216x216.png',
        price: 3000,
      },
      {
        title: '유자 티/에이드',
        img: 'http://www.mmthcoffee.com/data/file/mm_ade/thumb-3546841901_65LFiHXc_6d16a1d37c4bc3eb9fea0c49ad4a474d77ff3f6c_216x216.png',
        price: 4000,
      },
      {
        title: '청귤 에이드',
        img: 'http://www.mmthcoffee.com/data/file/mm_ade/thumb-3546841901_QAmjVYzc_8b190bc187d872763817750bf79ed99494bab799_216x216.png',
        price: 3000,
      },
      {
        title: '수박주스',
        img: 'http://www.mmthcoffee.com/data/file/mm_ade/thumb-3546841901_UxbsAHCO_f292332d454f3cbdcba3873553647fad06c5c5b4_216x216.png',
        price: 9000,
      },
      {
        title: '지리산 청 매실 티',
        img: 'http://www.mmthcoffee.com/data/file/mm_ade/thumb-3553807308_3DCJyo5w_c91067f98e412fdfd9f18a0b7e86edf14e3dc5e4_216x216.jpg',
        price: 3000,
      },
      {
        title: '인크레드불 화이트',
        img: 'http://www.mmthcoffee.com/data/file/mm_ade/thumb-2040946705_gPbDOvwK_382dd71cf0c7c3a3956ebf15a834c966e5bc5a5a_216x216.png',
        price: 2000,
      },
    ],
  },
  {
    category: '푸드',
    menu: [
      {
        title: '바스크 치즈케이크',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_hegipAd0_3ddd8c23e85961b430b91f7243d35600066f6987_216x216.png',
        price: 2000,
      },
      {
        title: '클래식 치즈케이크',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_hdukUv28_b71abc480d238096b3e86e0ba2428c8ad45d57a7_216x216.png',
        price: 6000,
      },
      {
        title: '쇼콜라아메르 케이크',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_CPsEmdOx_d9bd0dfbd278e281b0c67be6911fa96191574ddb_216x216.png',
        price: 4000,
      },
      {
        title: '당근 케이크',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_pPuJx5ha_f1aaab7aaff650cbf2376e777259c93bd975c9da_216x216.png',
        price: 6000,
      },
      {
        title: '레인보우 케이크',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_09ahgS2Z_0abef6e543acf1d1f2e226ee305bf693c3c005d5_216x216.png',
        price: 2000,
      },
      {
        title: '단호박 타르트',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_vh67p2Wl_a7f502823b01b608bac9d5d7a4aca913aa09872a_216x216.png',
        price: 1000,
      },
      {
        title: '애플 시나몬 타르트',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_1jdc7VN9_fe06b7d893f931a600deb02e8ee60f9d75a17051_216x216.png',
        price: 6000,
      },
      {
        title: '잉글리쉬 머핀 샌드위치',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_lJAE0vMo_8f213df5caeb447db75e33c03593e25f05fe8b53_216x216.png',
        price: 5000,
      },
      {
        title: '치킨 팟파이',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_ISvRonPB_cba9ef7cc67ebf746a27cd62fbcaf93ac43116f8_216x216.jpg',
        price: 1000,
      },
      {
        title: '멜팅치즈 샌드위치',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_tboV3u9n_3ddf8e994e9f72fe326a73fa5e7e1c9c22da8f48_216x216.png',
        price: 3000,
      },
      {
        title: '베이글(플레인블루베리)',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_ReZgExC1_b8abb6b96391ce64d30284cb35c3bf9430f61170_216x216.png',
        price: 3000,
      },
      {
        title: '허니브레드',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_MyRsbALG_377b514f81d789d889df2c7509e89aa17029cda7_216x216.png',
        price: 4000,
      },
      {
        title: '초코 브라우니 쿠키',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_FjyeC9YM_0ec984ca620919f6673c6b31a89a039807b62abb_216x216.png',
        price: 6000,
      },
      {
        title: '바나나 쿠키',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_SBKr5HJN_a13df570e9a52192b62afc08f3e70ece8eaafadd_216x216.png',
        price: 1000,
      },
      {
        title: '마카롱',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_HJbmafVS_035dc1ba48d521c489937e2cfce4c5cf67a6bc9b_216x216.png',
        price: 9000,
      },
      {
        title: '쁘띠 마카롱',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_Ldta1nbe_64c8a2f2eaba9061b8a7af5fa480edcf7ea66d11_216x216.png',
        price: 4000,
      },
      {
        title: '다크초코 파운드 케이크',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_0j2ko9OX_4dc43f555f80010dd39c957a34dd275e6b41a697_216x216.png',
        price: 7000,
      },
      {
        title: '후르츠 파운드 케이크',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_LfPU9ckF_fa9a3e374c3baee3ca13a6c6444f602fc11f23bb_216x216.png',
        price: 9000,
      },
      {
        title: '카라멜 파운드 케이크',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_HVnRNwcp_d97f903d2faf31459ef1e435e0de8a64549da191_216x216.png',
        price: 7000,
      },
      {
        title: '바닐라 비스킷 슈',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_yqGhLzjM_c574ce3d9d7569ec6ee370ca2cb5a5fc69d4f072_216x216.png',
        price: 4000,
      },
      {
        title: '초코 비스킷 슈',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_U84RSrO7_d11c1350df0e5a5a45e33a0b18e53340949b2fc8_216x216.png',
        price: 3000,
      },
      {
        title: '제리의치즈케이크',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_hDr5V2AY_92e4d6fe49a1b586e7210bdbb8ed88c35fc68e2a_216x216.png',
        price: 8000,
      },
      {
        title: '대만식 샌드위치(햄치즈/ 카야)',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_f56ZnBkG_c297664c66127ea236b37a7bc44a505a27d6bb68_216x216.png',
        price: 1000,
      },
      {
        title: '고단백 에너지바',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_UQBfIxAV_3e0865500304ae1ea1a0723433d9fc28396f9929_216x216.png',
        price: 3000,
      },
      {
        title: '베리베리 땡큐바',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_yLz10X6B_db48aedc9cdc65e31a7f59b8e847130ffdc46247_216x216.png',
        price: 8000,
      },
      {
        title: '프레시 넛츠파이',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-3553807308_GI4fe8il_ac8ffedc9e39739a2ced0c33d4ced9244a9ee657_216x216.jpg',
        price: 3000,
      },
      {
        title: '크로플(플레인)',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-2040946705_wgx6juR7_264723852fd77592042df0a54953ced6e8ca7728_216x216.jpg',
        price: 4000,
      },
      {
        title: '치즈 크로플',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-2040946705_kdL2oOzt_0afde527d2e2bcf3858193ac233ba277cc0610f2_216x216.jpg',
        price: 6000,
      },
      {
        title: '에그타르트',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-2040946705_iLlqnNSs_fe106fbcfca328407fb5d1a9e5ca19cd90ef8f39_216x216.jpg',
        price: 2000,
      },
      {
        title: '매머드 초콜릿 칩 쿠키',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-2040946705_dbAUcmJB_a23c7186f96df19b69b62b68593c05c0c6233be4_216x216.png',
        price: 6000,
      },
      {
        title: '매머드 마카다미아 쿠키',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-2040946705_6MBeauyO_e1d511a7b11f1a2d6060c06570c196938d914f9b_216x216.png',
        price: 6000,
      },
      {
        title: '매머드 카라멜 필링스콘',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-2040946705_imhzX53c_6c85c73aa2288a791da512552b68581c1a4c8dbe_216x216.png',
        price: 1000,
      },
      {
        title: '매머드 라즈베리 필링스콘',
        img: 'http://www.mmthcoffee.com/data/file/mm_food/thumb-2040946705_Jbk74vNF_0b000111976fb66f64aab97cb5563babd30bb666_216x216.png',
        price: 2000,
      },
    ],
  },
  {
    category: '샌드위치/샐러드',
    menu: [
      {
        title: '에그 베이컨 샐러드',
        img: 'http://www.mmthcoffee.com/data/file/mm_salad/3553807308_2npWJA85_1f6de9fc835c775d8b1467fb7b7ffbe089a9cb95.png',
        price: 4000,
      },
      {
        title: '리코타 치킨 샐러드',
        img: 'http://www.mmthcoffee.com/data/file/mm_salad/3553807308_AOtDP9oK_2d6210fc5245d4f658a4ce719abd0973b59fc0e7.png',
        price: 2000,
      },
      {
        title: '클럽 샌드위치',
        img: 'http://www.mmthcoffee.com/data/file/mm_salad/thumb-1846184521_n9NSjVo4_1861db37a2329a5ea89d5dc290bc602912760263_216x216.png',
        price: 5000,
      },
      {
        title: '튜나 샐러리 샌드위치',
        img: 'http://www.mmthcoffee.com/data/file/mm_salad/thumb-1846184521_PM9htcnJ_52ee39caeb6266fb2deff4f761f4179bd4393dae_216x216.png',
        price: 4000,
      },
      {
        title: '에그 샐러드 샌드위치',
        img: 'http://www.mmthcoffee.com/data/file/mm_salad/thumb-1846184521_01AINrUQ_5ae3892ed6503e59a914c526257e68f1e3378a1b_216x216.png',
        price: 2000,
      },
      {
        title: '베이컨 치즈 샌드위치',
        img: 'http://www.mmthcoffee.com/data/file/mm_salad/thumb-1846184521_LIaqz0BJ_2f41a1dce053d804cf5c474d0fc6bfb34e5b7a5e_216x216.png',
        price: 4000,
      },
    ],
  },
];

function mocking() {
  const stores = createStore();
  const categories = createCategory();
  const products = createProduct();

  return { stores, categories, products };
}

function createStore() {
  const names = [
    '고든램지버거',
    '서브웨이',
    '맥도날드',
    '매머드커피',
    '스타벅스',
    '탐앤탐스',
    '커피빈',
    '감탄커피',
    '샐러디',
    '삼송빵집',
  ];

  const branchNames = [
    '잠실',
    '인천',
    '홍대',
    '목동',
    '종로',
    '이태원',
    '강남',
    '선릉',
    '신촌',
    '합정',
    '방이동',
    '부평',
    '전주',
    '경주',
    '부산',
    '노포',
    '동래',
    '창원',
    '진해',
    '김포',
    '양양',
    '강릉',
  ];

  const stores: storeCreateType[] = [];
  for (let i = 0; i < 10; i++) {
    const store: storeCreateType = {
      storeId: `store${i}`,
      password: '1234',
      branchName: branchNames[Math.floor(Math.random() * branchNames.length)],
      name: names[Math.floor(Math.random() * names.length)],
    };

    stores.push(store);
  }

  return stores;
}

function createCategory() {
  const categories = data.map((item) => item.category);
  const result: categoryCreateType[] = [];

  for (let i = 0; i < 10; i++) {
    categories.forEach((item) => {
      const category: categoryCreateType = {
        name: item,
        storeId: i + 1,
      };
      result.push(category);
    });
  }

  return result;
}

function createProduct() {
  const products: productCreateType[] = [];
  for (let i = 0; i < data.length; i++) {
    const { category, menu } = data[i];
    const options = [
      { type: 'quantity', optionName: '빨대', content: [] },
      { type: 'choice', optionName: '온도', content: ['HOT', 'ICE'] },
      { type: 'quantity', optionName: '봉투', content: [] },
      {
        type: 'choice',
        optionName: '사이즈',
        content: ['톨', '그란데', '벤티'],
      },
    ];

    menu.map((item) => {
      for (let j = 0; j <= 8; j++) {
        const product: productCreateType = {
          categoryId: i + j * 10 + 1,
          name: item.title,
          price: item.price,
          thumbnail: item.img,
          productOption: JSON.parse(JSON.stringify([...options])),
          isPopular: Math.random() * 10 > 8.5,
          isSoldOut: Math.random() * 10 > 9.4,
        };

        products.push(product);
      }
    });
  }

  return products;
}

export default mocking;
