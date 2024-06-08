import { Image, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type ProductProps = PropsWithChildren<{
    product: Product
}>

const ProductItem = ({ product }: ProductProps) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: product.imageUrl }}
                style={styles.image}
            />
            <View >
                <Text style={styles.name}>
                    {product.name}
                </Text>
                <View style={[styles.rowContainer, styles.ratingContainer]}>
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>{product.rating} ★</Text>
                    </View>
                    <Text style={styles.ratingCount}>
                        ({product.ratingCount.toLocaleString()})
                    </Text>
                </View>

                <View style={[styles.rowContainer, styles.priceContainer]}>
                    <Text style={styles.originalPrice}>
                        ₹{product.originalPrice.toLocaleString()}
                    </Text>
                    <Text style={styles.discountPrice}>
                        ₹{product.discountPrice.toLocaleString()}
                    </Text>
                    <Text style={styles.offerPercentage}>
                        %{product.offerPercentage} off
                    </Text>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    rowContainer: {
        flexDirection: 'row',
    },
    image: {
        width: 90,
        height: 150,
        resizeMode: 'contain',

        marginRight: 12,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color:'#000000'
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    priceContainer: {
        marginBottom: 12,
    },
    rating: {
        backgroundColor: '#4caf50',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginRight: 8,
    },
    ratingText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    ratingCount: {
        color: '#878787',
    },
    originalPrice: {
        fontSize: 16,
        textDecorationLine: 'line-through',
        color: '#666',
        marginRight: 8,
    },
    discountPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginRight: 8,
    },
    offerPercentage: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4caf50',
    },
    
})

export default ProductItem
