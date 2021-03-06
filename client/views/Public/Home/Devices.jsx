import React from 'react';
import { Paper, GridList, GridTile, CardTitle } from 'material-ui';

const styles = {
  master: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

// Tiles

const tilesData = [
  {
    img: '/images/home/grid/mockDrop_MacBook_Air.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: '/images/home/grid/mockDrop_iPad_desk.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: '/images/home/grid/mockDrop_red_pants.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: '/images/home/grid/mockDrop_iMac_window.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: '/images/home/grid/mockDrop_iPhone_6.jpg',
    title: 'Hats',
    author: 'Hans',
  },
];

export default class PublicHomeDevices extends React.Component {

  render() {
    const { master, gridList } = styles;

    return (
      <Paper style={{ backgroundColor: '#0066cc', minHeight: '375px', color: 'white' }} >
        <div className='ui grid fluid container' >
          <div className='right aligned sixteen wide column' style={{ textAlign: 'center' }}>
            <h1>Disponível em diversas plataformas</h1>
          </div>
          <div className='eight wide computer sixteen wide mobile column' >
            <div className='ui basic center aligned segment' style={{ fontSize: '18px' }}>
              A lern é compatível em dispositivos móveis, desktops ou através do seu
              navegador preferido.
            </div>
            <div className='ui three column grid'>
              <div className='column'>
                <div className='ui basic center aligned segment'>
                  <i className='huge chrome icon'></i>
                </div>
              </div>
              <div className='column'>
                <div className='ui basic center aligned segment'>
                  <i className='huge firefox icon'></i>
                </div>
              </div>
              <div className='column'>
                <div className='ui basic center aligned segment'>
                  <i className='huge safari icon'></i>
                </div>
              </div>
            </div>

          </div>

          <div className='eight wide computer sixteen wide mobile column' style={master} >
            <GridList style={gridList} cols={2.2}>
              {tilesData.map((tile) => (
                <GridTile key={tile.img} >
                  <img src={tile.img} />
                </GridTile>
              ))}
            </GridList>
          </div>
        </div>
      </Paper>
    );
  }
};
