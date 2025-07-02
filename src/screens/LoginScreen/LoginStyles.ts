import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: Fonts.xLarge,
    textAlign: 'center',
    color: Colors.primary,
    marginBottom: 32,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1.2,
    borderColor: Colors.border,
    paddingVertical: 14,
    paddingHorizontal: 12,
    fontSize: Fonts.medium,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  inputFocused: {
    borderColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: Fonts.medium,
    color: '#fff',
    fontWeight: '600',
  },
});

export default styles;
