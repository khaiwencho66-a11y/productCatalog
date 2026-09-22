import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { loadProductList, searchProduct } from "../actions/productAction";
import FastImage from "@d11/react-native-fast-image";


const ProductListScreen= ({navigation}: any) => {
    const [productList, setProductList] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [isRefresh, setIsRefresh] = useState(false);
    const [searchText, setSearchText] = useState(String);
    const [isSearch, setIsSearch] = useState(false);

    useEffect(()=>{
        // console.log('1. loadProductList...');
        const getProductList = async() => {
            try{
                const data = await loadProductList(1);
                console.log('productslist:', data);
                setProductList(data);
            } catch(error) {
                console.error('error loadProductList:', error);
            }
        }
        getProductList();
    }, []);

    const loadMore=async()=> {
        // console.log('2. loadMore...');
        if(loading || isSearch) {
            return;
        }
        setLoading(true);
        try{
            const data = await loadProductList(page+1);
            console.log('productslist:', data);

            setPage(prev => prev + 1);
            setProductList(prev => [...prev, ...data]);

            if(data.length !== 0) {
                setLoading(false);
            }
        } catch(error) {
            setLoading(false);
            console.error('loadMore > error loadProductList:', error);
        }
    }

    const onRefresh=async()=> {
        // console.log('3. onRefresh...');
        setIsRefresh(true);

        setProductList([]);
        setPage(1);

        try{
            const data = await loadProductList(1);
            console.log('productslist:', data);
            setProductList(data);
        } catch(error) {
            console.error('error loadProductList:', error);
        }
        setIsRefresh(false);
    }

    const onSearch=async(text: string)=> {
        setSearchText(text);
        if(text.trim() === '') {
            setIsSearch(false);
            setPage(1);
        }
        try{
            // console.log('isSearching:', isSearch);
            setIsSearch(true);
            const data = await searchProduct(text);
            setProductList(data);

        } catch(error) {
            console.error('error onSearch: ', error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput 
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Search Products..."
                    placeholderTextColor="#a3a3a3"
                    style={[{width: '90%'}]}
                />
                <TouchableOpacity onPress={()=>{onSearch(searchText)}}
                style={[{justifyContent: 'center', padding: 5}]}>
                    <FastImage source={require('../assets/search-btn.png')} style={[{width: 25, height:25}]}/>
                </TouchableOpacity>
            </View>
            <FlatList
                data={productList}
                numColumns={2}
                renderItem={({item})=>(
                    <View style={styles.productContainer}>
                        <TouchableOpacity onPress={()=> {
                            navigation.getParent()?.navigate('ProductDetail', {
                                selectedId: item.id,
                            });
                        }}>
                            <View>
                                <FastImage source={{uri: item.images[0]}} style={styles.imageSize}/>
                            </View>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelTitle}>{item.title}</Text>
                                <Text style={styles.labelPrice}>RM {item.price}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                refreshing={isRefresh}
                onRefresh={onRefresh}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={
                    loading ? <ActivityIndicator /> : null
                }
                keyExtractor={item=> item.id}
            />


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'#d3d3d3',
        alignItems:'center',
        backgroundColor: '#fff'
        // paddingHorizontal: 5
    },
    productContainer: {
        flex: 1,
        margin: 10,
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 10,
        alignContent: 'flex-start'
    },
    imageSize: {
        height: 150,
        width: '100%',
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1
    },
    labelContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 10,
    },
    labelTitle:{
        color: '#000',
    },
    labelPrice:{
        color: '#ff2400',
        fontWeight: 500,
        paddingTop: 5,
    }

});

export default ProductListScreen;