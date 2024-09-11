import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { colors, values } from '../../theme'

interface Styles {
  container: ViewStyle;
  searchContainer: ViewStyle;
  input: TextStyle;
  currentIcon: ImageStyle;
  header: TextStyle
  searchButton: ViewStyle
  searchButtonText: TextStyle
  name: TextStyle
  timezone: TextStyle
  currentContainer: ViewStyle
  weather: TextStyle
  temperature: TextStyle
  time: TextStyle
  list: ViewStyle
  error: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: values.s
  },
  header: {
    fontSize: values.m,
    textTransform: 'uppercase',
    color: colors.white1
  },
  searchContainer: {
    width: '100%',
    minHeight: values.l,
    margin: values.s,
    flexDirection: 'row',
    backgroundColor: colors.black1,
    borderRadius: values.xs
  },
  input: {
    flex: 1,
    paddingHorizontal: values.xs,
    color: colors.white1
  },
  searchButton: {
    backgroundColor: colors.gray2,
    borderTopRightRadius: values.xs,
    borderBottomRightRadius: values.xs,
    paddingHorizontal: values.xs,
    justifyContent: 'center'
  },
  searchButtonText: {
    color: colors.white1
  },
  name: {
    fontSize: values.l,
    textAlign: 'center',
    marginTop: values.s,
    color: colors.white1
  },
  timezone: {
    color: colors.white1
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
    fontSize: values.s,
    color: colors.white1
  },
  temperature: {
    fontSize: values.l,
    color: colors.white1
  },
  time: {
    color: colors.white1
  },
  list: {
    marginHorizontal: -values.s
  },
  error: {
    color: colors.white1
  }
})

export default styles
