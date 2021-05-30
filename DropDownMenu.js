import React from 'react';
import { useState, useRef } from 'react'
import { Modal, Pressable, View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

// [{key: 'key', value: 'value'}]

export const DropDownMenu = (props) => {
  const marker = useRef(null)
  const [current, setCurrent] = useState(props.value)
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState(0);
  const itemHeight = props.itemHeight || 32;

  const onPress = () => {
    marker.current?.measure((x, y, w, h, px, py) => {
      setPosition({ x: px, y: py + h + 4 })
      setWidth(w)
      setVisible(!visible)
    })
  }

  const onHide = () => {
    setVisible(false)
  }

  const onSelected = (item) => {
    props.onSelect(item)
    setCurrent(item)
    setVisible(false)
  }

  return (
    <>
      <Pressable style={[{ width: '100%', alignItems: 'center', justifyContent: 'center', height: 48 }, props.style]} ref={marker} onPress={onPress}>
        <Text style={props.textStyle}>{current.value}</Text>
      </Pressable>
      <DropDown
        data={props.data}
        visible={visible}
        position={position}
        width={width}
        height={itemHeight}
        onSelected={onSelected}
        onHide={onHide}
        style={props.dropDownStyle}
        itemStyle={props.dropDownItemStyle}
        itemTextStyle={props.dropDownItemStyle} />
    </>
  )
}

const DropDown = (props) => {
  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => props.onSelected(item)} style={[props.itemStyle, { height: props.height, alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={[props.itemTextStyle, { color: '#F2AA4CFF' }]}>{item.value}</Text>
      </Pressable>
    );
  }

  return (
    <Modal transparent={true} animationType='fade' visible={props.visible}>
      <Pressable style={{ width: '100%', height: '100%' }} onPress={props.onHide}>
        <View style={{
          position: 'absolute',
          left: props.position.x,
          top: props.position.y,
          width: props.width,
          height: props.height * props.data.length,
        }}>
          <FlatList
            data={props.data}
            style={[
              props.style,
              {
                overflow: 'hidden',
                borderRadius: 30,
                borderWidth: 2,
                borderColor: '#F2AA4CFF',
              }
            ]}
            renderItem={renderItem}
            keyExtractor={item => item.key}
          />
        </View>
      </Pressable>

    </Modal>

  )
}
