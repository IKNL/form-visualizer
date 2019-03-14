import React, { Component } from 'react';
import { DropTarget } from 'react-dnd'
import './editor.css'
import Item from '../item/item'
import TextItem from '../item/textitem'
import RadioItem from '../item/radioitem'
import CheckItem from '../item/checkitem'
import ItemWrapper from '../item/itemwrapper'
import ItemGroup from '../item/itemgroup'


const conceptTarget = {
    drop() {
        //hier functie toevoegen voor als we een item droppen
      return { name: 'Editor' }
    },
  }

class Editor extends Component {
    render() {
        const { canDrop, isOver, connectDropTarget } = this.props
        const isActive = canDrop && isOver

        let backgroundColor = '#222'
        if (isActive) {
          backgroundColor = 'darkgreen'
        } else if (canDrop) {
          backgroundColor = 'darkkhaki'
        }

        return (
            <div className="Editor">
              <ItemWrapper>
                <ItemGroup label="Henkie">
                  <ItemWrapper>
                    <TextItem label="Uw naam astublieft:"/>
                  </ItemWrapper>
                  <ItemWrapper>
                    <TextItem label="Uw adres:"/>
                  </ItemWrapper>
                  <ItemWrapper>
                    <RadioItem label="Guido's naam:" items={['guido','Hennie','Henkie']}/>
                  </ItemWrapper>
                </ItemGroup>
              </ItemWrapper>
              <ItemWrapper>
                <ItemGroup label="Wil lopen">
                  <ItemWrapper>
                    <TextItem label="Uw naam astublieft:"/>
                  </ItemWrapper>
                  <ItemWrapper>
                    <CheckItem label="Guido's naam:" items={['guido','Hennie','Henkie']}/>
                  </ItemWrapper>
                </ItemGroup>
              </ItemWrapper>
            </div>
        );
    }
}

// export default DropTarget("concept", conceptTarget, (connect, monitor) => ({
//     connectDropTarget: connect.dropTarget(),
//     isOver: monitor.isOver(),
//     canDrop: monitor.canDrop(),
// }))(Editor)

export default Editor