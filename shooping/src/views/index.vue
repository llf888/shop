<template>
    <div>
        <mt-nav></mt-nav>
        <mt-carousel></mt-carousel>
        <mt-product></mt-product>
        <mt-products></mt-products>
        <mt-recommend></mt-recommend>
        <mt-smallcar></mt-smallcar>
        <mt-foot></mt-foot>
    </div>
</template>
<script>
import mtNav from "../components/navigation.vue"
import mtCarousel from "../components/carousel.vue"
import mtProduct from "../components/product.vue"
import mtProducts from "../components/products.vue"
import mtRecommend from "../components/recommend.vue"
import mtFoot from "../components/footer.vue"
import mtSmallcar from "../components/small_carousel.vue"
export default {
    data(){
        return{}
    },
    created(){
    },
    components:{
        mtNav,
        mtCarousel,
        mtProduct,
        mtProducts,
        mtRecommend,
        mtFoot,
        mtSmallcar
    }
}
</script>
<style scoped></style>