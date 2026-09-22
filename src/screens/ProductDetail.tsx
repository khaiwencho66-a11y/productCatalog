import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { loadProductDetails } from "../actions/productAction";
import FastImage from "@d11/react-native-fast-image";

const ProductDetailScreen= ({route, navigation}: any) => {
    const { selectedId } = route.params;
    const [productDetail, setProductDetail] = useState<any>(null);

    useEffect(()=>{
        console.log('selectedId:',selectedId);
        const getProductDetail = async()=>{
            const data = await loadProductDetails(selectedId);
            setProductDetail(data);
        };
        getProductDetail();
    }, [selectedId]);

    // console.log('productDetail:', productDetail);

    return(
        <View style={[{flex:1}]}>
            <ScrollView style={[{flex:1}]}>
                <View>
                    <TouchableOpacity style={styles.backArrowBtn} onPress={()=> {navigation.goBack();}}>
                        <FastImage source={require('../assets/left-arrow.png')} style={[{width: 35, height:35, padding:10}]} resizeMode={FastImage.resizeMode.contain} />
                    </TouchableOpacity>
                    <View style={styles.productImgContainer}>
                        <FastImage source={{uri: productDetail?.images[0]}} style={styles.productImage} resizeMode={FastImage.resizeMode.contain}/>
                    </View>

                    <View style={styles.productDescGap}>
                        <View style={[styles.sectionContainer, styles.sectionLine]}>
                            <Text style={styles.labelProductTitle}>{productDetail?.title}</Text>
                            <Text style={styles.labelProductPrice}>{productDetail?.price}</Text>
                        </View>

                        <View style={[styles.sectionContainer, styles.sectionLine]}>
                            <Text style={styles.labelTitle}>
                                Description
                            </Text>
                            <Text>
                                {productDetail?.description}
                            </Text>
                        </View>

                        <View style={[styles.sectionContainer, styles.sectionLine]}>
                            <Text style={styles.labelTitle}>
                                Specification
                            </Text>
                            <View style={styles.row}>
                                <Text style={[styles.descLabel, styles.descLeftMargin]}>
                                    AvailabilityStatus
                                </Text>
                                <Text style={styles.descLabel}>
                                    {productDetail?.availabilityStatus}
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.descLabel, styles.descLeftMargin]}>
                                    Stock
                                </Text>
                                <Text style={styles.descLabel}>
                                    {productDetail?.stock}
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.descLabel, styles.descLeftMargin]}>
                                    Brand
                                </Text>
                                <Text style={styles.descLabel}>
                                    {productDetail?.brand}
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.descLabel, styles.descLeftMargin]}>
                                    Weight
                                </Text>
                                <Text style={styles.descLabel}>
                                    {productDetail?.weight}
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.descLabel, styles.descLeftMargin]}>
                                    Dimensions
                                </Text>
                                <Text style={styles.descLabel}>
                                    {productDetail?.dimensions.depth} x {productDetail?.dimensions.width} x {productDetail?.dimensions.height}
                                </Text>
                            </View>
                        </View>

                        <View style={[styles.sectionContainer, styles.sectionLine]}>
                            <Text style={styles.labelTitle}>
                                Service
                            </Text>
                            <View style={styles.row}>
                                <Text style={[styles.descLabel, styles.descLeftMargin]}>
                                    Warranty Information
                                </Text>
                                <Text style={styles.descLabel}>
                                    {productDetail?.warrantyInformation}
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.descLabel, styles.descLeftMargin]}>
                                    Shipping Information
                                </Text>
                                <Text style={styles.descLabel}>
                                    {productDetail?.shippingInformation}
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.descLabel, styles.descLeftMargin]}>
                                    Return Policy
                                </Text>
                                <Text style={styles.descLabel}>
                                    {productDetail?.returnPolicy}
                                </Text>
                            </View>
                        </View>

                        <View style={[styles.sectionContainer, styles.sectionLine]}>
                            <Text style={styles.labelTitle}>
                                Rating
                            </Text>
                            <View >
                                <FlatList
                                    data={productDetail?.reviews}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({item}) => (
                                        <View>
                                            
                                            <View style={[{padding:10, marginBottom: 8, borderRadius: 10, borderWidth: 1, borderColor: '#b3b3b3'}]}>
                                                <View style={[{flexDirection: 'row'}]}>
                                                    <FastImage source={require('../assets/default-profile.png')} style={[{width: 25, height: 25, paddingRight: 20}]}/>
                                                    <Text style={[{paddingLeft: 10}]}>
                                                        ⭐ {item.rating}
                                                    </Text>
                                                </View>
                                                
                                                <Text>
                                                    {item.comment}
                                                </Text>
                                                <Text>
                                                    {item.date}
                                                </Text>
                                            </View>
                                        </View>
                                    )}
                                />
                                
                            </View>

                        </View>

                    </View>
                </View>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    backArrowBtn: {
        position: 'absolute', 
        zIndex: 10, 
        elevation: 10, 
        padding: 5, 
        marginTop: 10
    },
    productImgContainer: {
        height: 350,
    },
    productImage: {
        width: '100%',
        height: '100%',
         backgroundColor: '#fff',
        shadowColor: '#a3a3a3',
        shadowOffset: {
            width: 0,
            height: 3, // shadow goes downward
        },
        shadowOpacity: 0.1,
        elevation: 5,
    },
    productDescGap: {
        marginTop: 5
    },
    sectionContainer:{
        padding: 10,
        backgroundColor: '#fff'

    },
    sectionLine: {
        borderColor:'#b3b3b3',
        borderBottomWidth: 1,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
    },
    descLabel: {
        width: '50%',
        alignItems: 'flex-start',
    },
    descLeftMargin: {
        paddingRight: 5,
    },
    labelTitle:{
        fontWeight: 600,
        fontSize: 15,
        marginBottom: 5,
    },
    labelDesc: {
        lineHeight: 18,
    },
    labelProductTitle:{
        color:'#000', 
        paddingBottom: 8, 
        fontSize: 17, 
        fontWeight: 500,
    },
    labelProductPrice:{
        color:'#ff2400', 
        paddingBottom: 0, 
        fontSize: 18, 
        fontWeight: 600,
    }

});

export default ProductDetailScreen;
