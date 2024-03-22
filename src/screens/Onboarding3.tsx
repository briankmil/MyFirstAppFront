import React, { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import ImagePicker, { ImagePickerResponse } from 'react-native-image-picker';

interface ImagePickerProps {
  onImageSelected: (imageUri: string) => void;
}

export const Onboarding3: React.FC<ImagePickerProps> = ({ onImageSelected }) => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleChooseImage = () => {
    ImagePicker.showImagePicker({ mediaType: 'photo' }, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('El usuario canceló la selección de imagen');
      } else if (response.error) {
        console.log('Error al seleccionar imagen:', response.error);
      } else {
        const source = { uri: response.uri };
        setImageUri(source.uri);
        onImageSelected(source.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <Button title="Elegir imagen" onPress={handleChooseImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
