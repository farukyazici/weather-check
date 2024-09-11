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
  clearBtn: TextStyle
  name: TextStyle
  timezone: TextStyle
  currentContainer: ViewStyle
  weather: TextStyle
  temperature: TextStyle
  time: TextStyle
  list: ViewStyle
  errorContainer: ViewStyle
  errorIcon: TextStyle
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
    height: values.xl,
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
  clearBtn: {
    height: values.xl,
    fontSize: values.m,
    width: values.xl,
    textAlign: 'center',
    color: colors.white1,
    padding: values.xs,
    alignSelf: 'center',
    justifyContent: 'center'
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
  errorContainer: {
    alignItems: 'center',
    marginTop: values.xxl
  },
  errorIcon: {
    color: colors.white1,
    fontSize: values.xl,
    textAlign: 'center',
    borderRadius: values.xl,
    borderWidth: values.xxs,
    width: values.xxl,
    height: values.xxl,
    borderColor: colors.white1,
    fontWeight: 'bold',
    paddingTop: values.s
  },
  error: {
    color: colors.white1,
    fontSize: values.m,
    marginTop: values.m
  }
})

export default styles
