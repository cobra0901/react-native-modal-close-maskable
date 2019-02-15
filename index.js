 renderPhoto() {
    if (!this.state.modalVisible)
        return null
    return (
      <Modal 
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(false)}}
        >
          <TouchableOpacity 
            style={styles.containerC} 
            activeOpacity={1} 
            onPressOut={() => {this.setModalVisible(false)}}
          >
            <ScrollView 
              directionalLockEnabled={true} 
              contentContainerStyle={styles.scrollModal}
            >
              <TouchableWithoutFeedback>
                <View style={styles.scrollModal}>
                  <Text>Hello every body</Text>
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </TouchableOpacity>   
        </Modal> 
    );
  }
  
  setModalVisible(visible) {
    this.setState({
        modalVisible: visible,
    })
  }
  
  scrollModal:{
    height:70,
    width:250,
    backgroundColor:'pink',
    borderRadius:12,
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  }
  
  containerC:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  
 {this.renderPhoto()}
