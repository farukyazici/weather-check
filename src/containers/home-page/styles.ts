import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { colors, values } from '../../theme'

interface Styles {
  container: ViewStyle;
  searchContainer: ViewStyle;
  input: ViewStyle;
  currentIcon: ImageStyle;
  header: TextStyle
  searchButton: ViewStyle
  name: TextStyle
  currentContainer: ViewStyle
  weather: TextStyle
  temperature: TextStyle
  list: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: values.s
  },
  header: {
    fontSize: values.m,
    textTransform: 'uppercase'
  },
  searchContainer: {
    width: '100%',
    margin: values.s,
    flexDirection: 'row',
    backgroundColor: colors.black1,
    borderRadius: values.xs
  },
  input: {
    flex: 1,
    paddingHorizontal: values.xs
  },
  searchButton: {
    backgroundColor: colors.gray2,
    borderTopRightRadius: values.xs,
    borderBottomRightRadius: values.xs,
    paddingHorizontal: values.xs,
    justifyContent: 'center'
  },
  name: {
    fontSize: values.l,
    textAlign: 'center',
    marginTop: values.s
  },
  currentContainer: {
    flexDirection: 'row',
    marginVertical: values.l,
    alignItems: 'center'
  },
  currentIcon: {
    width: values.xxl,
    height: values.xxl,
    marginRight: values.s
  },
  weather: {
    fontSize: values.s
  },
  temperature: {
    fontSize: values.l
  },
  list: {
    marginHorizontal: -values.s
  }
})

export default styles
