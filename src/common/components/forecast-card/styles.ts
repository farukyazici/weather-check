import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { colors, values } from '../../../theme'

interface Styles {
  container: ViewStyle
  icon: ImageStyle
  temperature: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: colors.black1,
    alignItems: 'center',
    padding: values.s,
    margin: values.xs,
    borderRadius: values.xxs,
    height: values.xxxl
  },
  icon: {
    width: values.xl,
    height: values.xl,
    marginVertical: values.xs
  },
  temperature: {
    fontWeight: 'bold'
  }
})

export default styles
