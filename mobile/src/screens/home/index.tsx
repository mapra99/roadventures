import Layout from 'components/layout'
import Mapbox, { Camera, LocationPuck, MapView, UserLocation } from '@rnmapbox/maps'
import { StyleSheet, View } from 'react-native'

Mapbox.setAccessToken('sk.eyJ1IjoibXByYWRhOTkiLCJhIjoiY2x6ZzF6cDVtMGowbTJyb2pnYXpnb2N6YiJ9.FZ0pjqDNTy8luWIpqsF5UA')

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'tomato'
  },
  map: {
    flex: 1
  }
})

function Home() {
  return (
    <Layout>
      <View style={styles.page}>
        <View style={styles.container}>
          <MapView style={styles.map} compassEnabled>
            <Camera centerCoordinate={[-74.03312551130742, 4.732474949026318]} zoomLevel={15} />
            <LocationPuck puckBearing="course" puckBearingEnabled />
            <UserLocation />
          </MapView>
        </View>
      </View>
    </Layout>
  )
}

export default Home
