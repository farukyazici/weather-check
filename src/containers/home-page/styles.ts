import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { colors } from '../../theme';

interface Styles {
  container: ViewStyle;
  searchContainer: ViewStyle;
  input: ViewStyle;
  currentIcon: ImageStyle;
  header: TextStyle
  searchButton: ViewStyle
  name: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16
  },
  header: {
    fontSize: 24,
    textTransform: 'uppercase'
  },
  searchContainer: {
    width: '100%',
    margin: 16,
    flexDirection: 'row',
    backgroundColor: colors.black1,
    borderRadius: 8
  },
  input: {
    flex: 1,
    paddingHorizontal: 8
  },
  searchButton: {
    backgroundColor: colors.gray2,
    borderRadius: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 8,
    justifyContent: 'center'
  },
  name: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 16
  },
  currentCondition: {
    flexDirection: 'row',
    marginVertical: 32,
    alignItems: 'center'
  },
  currentIcon: {
    width: 96,
    height: 96,
    marginRight: 16
  },
  weatherText: {
    fontSize: 16
  },
  tempText: {
    fontSize: 32
  }
})

export default styles
