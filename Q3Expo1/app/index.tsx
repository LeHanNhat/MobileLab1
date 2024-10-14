import React, { useState } from "react";
import { Text, Button, View } from "react-native"
export default () => {
  const [pressCount, setpressCount] = useState(0);
  return (
    <View style={{ alignItems: "center", marginTop: 20 }} >

      <Text> You 've presse the button: {pressCount} time(s) </Text>
      <Button title="Press me" onPress={() => setpressCount(pressCount + 1)} />
    </View>
  );


}