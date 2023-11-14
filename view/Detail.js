import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Detail({ route }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.container}>
      <View>
        <Image source={route.params?.img} style={{ width: 272, height: 278 }} />
      </View>
      <View
        style={{ width: "100%", justifyContent: "space-around", height: 280 }}
      >
        <Text style={{ width: "100%", fontSize: 20, fontWeight: "700" }}>
          {route.params?.name}
        </Text>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              color: "rgba(0, 0, 0, 0.54)",
            }}
          >
            {route.params?.description}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            ${route.params?.price}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image
                source={require("../assets/clock.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  color: "rgba(0, 0, 0, 0.54)",
                }}
              >
                Delivery in
              </Text>
            </View>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>30 min</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Pressable
              onPress={() => {
                setQuantity(quantity - 1);
                if (quantity <= 1) {
                  setQuantity(1);
                }
              }}
              style={{
                width: 21,
                height: 21,
                backgroundColor: "rgba(241, 176, 0, 1)",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/subtraction.png")}
                style={{ width: 20, height: 20 }}
              />
            </Pressable>
            <TextInput
              keyboardType="numeric"
              style={{
                fontSize: 20,
                fontWeight: "700",
                width: 40,
                textAlign: "center",
              }}
              value={quantity}
            />
            <Pressable
              onPress={() => {
                setQuantity(quantity + 1);
              }}
              style={{
                width: 21,
                height: 21,
                backgroundColor: "rgba(241, 176, 0, 1)",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/plus.png")}
                style={{ width: 20, height: 20 }}
              />
            </Pressable>
          </View>
        </View>
        <View>
          <Text style={{ width: "100%", fontSize: 20, fontWeight: "700" }}>
            Restaurants info
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              color: "rgba(0, 0, 0, 0.67)",
            }}
          >
            Order a Large Pizza but the size is the equivalent of a medium/small
            from other places at the same price range.
          </Text>
        </View>
      </View>
      <Pressable
        style={{
          width: 316,
          height: 58,
          backgroundColor: "rgba(241, 176, 0, 1)",
          borderWidth: 1,
          borderColor: "rgba(0, 0, 0, 0.2)",
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "700", color: "#fff" }}>
          Add to cart
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 360,
    height: 640,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
});