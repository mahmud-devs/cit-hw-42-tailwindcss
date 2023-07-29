tailwind.config = {
    theme: {
      extend: {
        // maxWidth: {
        //     container: '1260px',
        // },
        colors: {
          clifford: '#da373d',
          headerc: '#a200ff',
          header2c : '#005ec7',
          navcolor: '' ,
          perac: '#666666',
          ggray: '#dce0e3d9',
          pera:'rgba(0,0,0,.6)',
          itemcolor1: 'rgba(0,94,199,.85)',
          itemcolor2: 'rgba(162,0,255,.8)',
          clientborder: 'linear-gradient(135deg,rgba(0,94,199,.99),rgba(162,0,255,.99)) ' ,
        },
        backgroundImage: {
          'teambg': " linear-gradient(135deg,rgba(0,94,199,.85),rgba(162,0,255,.8)) ,url('./images/teambg.jpg') ",
          
        },
        boxShadow: {
          'shadow': '0 0px 25px 0px rgb(0 0 0 / 0.25)',
        },
      },
    },
}
