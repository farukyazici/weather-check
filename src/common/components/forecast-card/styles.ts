import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { colors, values } from '../../../theme'

interface Styles {
  container: ViewStyle
  hour: TextStyle
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
  hour: {
    color: colors.white1
  },
  icon: {
    width: values.xl,
    height: values.xl,
    marginVertical: values.xs
  },
  temperature: {
    fontWeight: 'bold',
    color: colors.white1
  }
})

export default styles
