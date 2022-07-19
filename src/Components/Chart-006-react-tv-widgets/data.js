const data = [
  [1593437400000, 88.31, 90.54, 87.82, 90.44],
  [1593523800000, 90.02, 91.5, 90, 91.2],
  [1593610200000, 91.28, 91.84, 90.98, 91.03],
  [1593696600000, 91.96, 92.62, 90.91, 91.03],
  [1594042200000, 92.5, 93.94, 92.47, 93.46],
  [1594128600000, 93.85, 94.65, 93.06, 93.17],
  [1594215000000, 94.18, 95.38, 94.09, 95.34],
  [1594301400000, 96.26, 96.32, 94.67, 95.75],
  [1594387800000, 95.33, 95.98, 94.71, 95.92],
  [1594647000000, 97.26, 99.96, 95.26, 95.48],
  [1594733400000, 94.84, 97.25, 93.88, 97.06],
  [1594819800000, 98.99, 99.25, 96.49, 97.72],
  [1594906200000, 96.56, 97.4, 95.9, 96.52],
  [1594992600000, 96.99, 97.15, 95.84, 96.33],
  [1595251800000, 96.42, 98.5, 96.06, 98.36],
  [1595338200000, 99.17, 99.25, 96.74, 97],
  [1595424600000, 96.69, 97.97, 96.6, 97.27],
  [1595511000000, 97, 97.08, 92.01, 92.85],
  [1595597400000, 90.99, 92.97, 89.14, 92.61],
  [1595856600000, 93.71, 94.9, 93.48, 94.81],
  [1595943000000, 94.37, 94.55, 93.25, 93.25],
  [1596029400000, 93.75, 95.23, 93.71, 95.04],
  [1596115800000, 94.19, 96.3, 93.77, 96.19],
  [1596202200000, 102.89, 106.42, 100.82, 106.26],
  [1596461400000, 108.2, 111.64, 107.89, 108.94],
  [1596547800000, 109.13, 110.79, 108.39, 109.67],
  [1596634200000, 109.38, 110.39, 108.9, 110.06],
  [1596720600000, 110.4, 114.41, 109.8, 113.9],
  [1596807000000, 113.21, 113.68, 110.29, 111.11],
  [1597066200000, 112.6, 113.78, 110, 112.73],
  [1597152600000, 111.97, 112.48, 109.11, 109.38],
  [1597239000000, 110.5, 113.28, 110.3, 113.01],
  [1597325400000, 114.43, 116.04, 113.93, 115.01],
  [1597411800000, 114.83, 115, 113.04, 114.91],
  [1597671000000, 116.06, 116.09, 113.96, 114.61],
  [1597757400000, 114.35, 116, 114.01, 115.56],
  [1597843800000, 115.98, 117.16, 115.61, 115.71],
  [1597930200000, 115.75, 118.39, 115.73, 118.28],
  [1598016600000, 119.26, 124.87, 119.25, 124.37],
  [1598275800000, 128.7, 128.79, 123.94, 125.86],
  [1598362200000, 124.7, 125.18, 123.05, 124.82],
  [1598448600000, 126.18, 126.99, 125.08, 126.52],
  [1598535000000, 127.14, 127.49, 123.83, 125.01],
  [1598621400000, 126.01, 126.44, 124.58, 124.81],
  [1598880600000, 127.58, 131, 126, 129.04],
  [1598967000000, 132.76, 134.8, 130.53, 134.18],
  [1599053400000, 137.59, 137.98, 127, 131.4],
  [1599139800000, 126.91, 128.84, 120.5, 120.88],
  [1599226200000, 120.07, 123.7, 110.89, 120.96],
  [1599571800000, 113.95, 118.99, 112.68, 112.82],
  [1599658200000, 117.26, 119.14, 115.26, 117.32],
  [1599744600000, 120.36, 120.5, 112.5, 113.49],
  [1599831000000, 114.57, 115.23, 110, 112],
  [1600090200000, 114.72, 115.93, 112.8, 115.36],
  [1600176600000, 118.33, 118.83, 113.61, 115.54],
  [1600263000000, 115.23, 116, 112.04, 112.13],
  [1600349400000, 109.72, 112.2, 108.71, 110.34],
  [1600435800000, 110.4, 110.88, 106.09, 106.84],
  [1600695000000, 104.54, 110.19, 103.1, 110.08],
  [1600781400000, 112.68, 112.86, 109.16, 111.81],
  [1600867800000, 111.62, 112.11, 106.77, 107.12],
  [1600954200000, 105.17, 110.25, 105, 108.22],
  [1601040600000, 108.43, 112.44, 107.67, 112.28],
  [1601299800000, 115.01, 115.32, 112.78, 114.96],
  [1601386200000, 114.55, 115.31, 113.57, 114.09],
  [1601472600000, 113.79, 117.26, 113.62, 115.81],
  [1601559000000, 117.64, 117.72, 115.83, 116.79],
  [1601645400000, 112.89, 115.37, 112.22, 113.02],
  [1601904600000, 113.91, 116.65, 113.55, 116.5],
  [1601991000000, 115.7, 116.12, 112.25, 113.16],
  [1602077400000, 114.62, 115.55, 114.13, 115.08],
  [1602163800000, 116.25, 116.4, 114.59, 114.97],
  [1602250200000, 115.28, 117, 114.92, 116.97],
  [1602509400000, 120.06, 125.18, 119.28, 124.4],
  [1602595800000, 125.27, 125.39, 119.65, 121.1],
  [1602682200000, 121, 123.03, 119.62, 121.19],
  [1602768600000, 118.72, 121.2, 118.15, 120.71],
  [1602855000000, 121.28, 121.55, 118.81, 119.02],
  [1603114200000, 119.96, 120.42, 115.66, 115.98],
  [1603200600000, 116.2, 118.98, 115.63, 117.51],
  [1603287000000, 116.67, 118.71, 116.45, 116.87],
  [1603373400000, 117.45, 118.04, 114.59, 115.75],
  [1603459800000, 116.39, 116.55, 114.28, 115.04],
  [1603719000000, 114.01, 116.55, 112.88, 115.05],
  [1603805400000, 115.49, 117.28, 114.54, 116.6],
  [1603891800000, 115.05, 115.43, 111.1, 111.2],
  [1603978200000, 112.37, 116.93, 112.2, 115.32],
  [1604064600000, 111.06, 111.99, 107.72, 108.86],
  [1604327400000, 109.11, 110.68, 107.32, 108.77],
  [1604413800000, 109.66, 111.49, 108.73, 110.44],
  [1604500200000, 114.14, 115.59, 112.35, 114.95],
  [1604586600000, 117.95, 119.62, 116.87, 119.03],
  [1604673000000, 118.32, 119.2, 116.13, 118.69],
  [1604932200000, 120.5, 121.99, 116.05, 116.32],
  [1605018600000, 115.55, 117.59, 114.13, 115.97],
  [1605105000000, 117.19, 119.63, 116.44, 119.49],
  [1605191400000, 119.62, 120.53, 118.57, 119.21],
  [1605277800000, 119.44, 119.67, 117.87, 119.26],
  [1605537000000, 118.92, 120.99, 118.15, 120.3],
  [1605623400000, 119.55, 120.67, 118.96, 119.39],
  [1605709800000, 118.61, 119.82, 118, 118.03],
  [1605796200000, 117.59, 119.06, 116.81, 118.64],
  [1605882600000, 118.64, 118.77, 117.29, 117.34],
  [1606141800000, 117.18, 117.62, 113.75, 113.85],
  [1606228200000, 113.91, 115.85, 112.59, 115.17],
  [1606314600000, 115.55, 116.75, 115.17, 116.03],
  [1606487400000, 116.57, 117.49, 116.22, 116.59],
  [1606746600000, 116.97, 120.97, 116.81, 119.05],
  [1606833000000, 121.01, 123.47, 120.01, 122.72],
  [1606919400000, 122.02, 123.37, 120.89, 123.08],
  [1607005800000, 123.52, 123.78, 122.21, 122.94],
  [1607092200000, 122.6, 122.86, 121.52, 122.25],
  [1607351400000, 122.31, 124.57, 122.25, 123.75],
  [1607437800000, 124.37, 124.98, 123.09, 124.38],
  [1607524200000, 124.53, 125.95, 121, 121.78],
  [1607610600000, 120.5, 123.87, 120.15, 123.24],
  [1607697000000, 122.43, 122.76, 120.55, 122.41],
  [1607956200000, 122.6, 123.35, 121.54, 121.78],
  [1608042600000, 124.34, 127.9, 124.13, 127.88],
  [1608129000000, 127.41, 128.37, 126.56, 127.81],
  [1608215400000, 128.9, 129.58, 128.04, 128.7],
  [1608301800000, 128.96, 129.1, 126.12, 126.66],
  [1608561000000, 125.02, 128.31, 123.45, 128.23],
  [1608647400000, 131.61, 134.41, 129.65, 131.88],
  [1608733800000, 132.16, 132.43, 130.78, 130.96],
  [1608820200000, 131.32, 133.46, 131.1, 131.97],
  [1609165800000, 133.99, 137.34, 133.51, 136.69],
  [1609252200000, 138.05, 138.79, 134.34, 134.87],
  [1609338600000, 135.58, 135.99, 133.4, 133.72],
  [1609425000000, 134.08, 134.74, 131.72, 132.69],
  [1609770600000, 133.52, 133.61, 126.76, 129.41],
  [1609857000000, 128.89, 131.74, 128.43, 131.01],
  [1609943400000, 127.72, 131.05, 126.38, 126.6],
  [1610029800000, 128.36, 131.63, 127.86, 130.92],
  [1610116200000, 132.43, 132.63, 130.23, 132.05],
  [1610375400000, 129.19, 130.17, 128.5, 128.98],
  [1610461800000, 128.5, 129.69, 126.86, 128.8],
  [1610548200000, 128.76, 131.45, 128.49, 130.89],
  [1610634600000, 130.8, 131, 128.76, 128.91],
  [1610721000000, 128.78, 130.22, 127, 127.14],
  [1611066600000, 127.78, 128.71, 126.94, 127.83],
  [1611153000000, 128.66, 132.49, 128.55, 132.03],
  [1611239400000, 133.8, 139.67, 133.59, 136.87],
  [1611325800000, 136.28, 139.85, 135.02, 139.07],
  [1611585000000, 143.07, 145.09, 136.54, 142.92],
  [1611671400000, 143.6, 144.3, 141.37, 143.16],
  [1611757800000, 143.43, 144.3, 140.41, 142.06],
  [1611844200000, 139.52, 141.99, 136.7, 137.09],
  [1611930600000, 135.83, 136.74, 130.21, 131.96],
  [1612189800000, 133.75, 135.38, 130.93, 134.14],
  [1612276200000, 135.73, 136.31, 134.61, 134.99],
  [1612362600000, 135.76, 135.77, 133.61, 133.94],
  [1612449000000, 136.3, 137.4, 134.59, 137.39],
  [1612535400000, 137.35, 137.42, 135.86, 136.76],
  [1612794600000, 136.03, 136.96, 134.92, 136.91],
  [1612881000000, 136.62, 137.88, 135.85, 136.01],
  [1612967400000, 136.48, 136.99, 134.4, 135.39],
  [1613053800000, 135.9, 136.39, 133.77, 135.13],
  [1613140200000, 134.35, 135.53, 133.69, 135.37],
  [1613485800000, 135.49, 136.01, 132.79, 133.19],
  [1613572200000, 131.25, 132.22, 129.47, 130.84],
  [1613658600000, 129.2, 130, 127.41, 129.71],
  [1613745000000, 130.24, 130.71, 128.8, 129.87],
  [1614004200000, 128.01, 129.72, 125.6, 126],
  [1614090600000, 123.76, 126.71, 118.39, 125.86],
  [1614177000000, 124.94, 125.56, 122.23, 125.35],
  [1614263400000, 124.68, 126.46, 120.54, 120.99],
  [1614349800000, 122.59, 124.85, 121.2, 121.26],
  [1614609000000, 123.75, 127.93, 122.79, 127.79],
  [1614695400000, 128.41, 128.72, 125.01, 125.12],
  [1614781800000, 124.81, 125.71, 121.84, 122.06],
  [1614868200000, 121.75, 123.6, 118.62, 120.13],
  [1614954600000, 120.98, 121.94, 117.57, 121.42],
  [1615213800000, 120.93, 121, 116.21, 116.36],
  [1615300200000, 119.03, 122.06, 118.79, 121.09],
  [1615386600000, 121.69, 122.17, 119.45, 119.98],
  [1615473000000, 122.54, 123.21, 121.26, 121.96],
  [1615559400000, 120.4, 121.17, 119.16, 121.03],
  [1615815000000, 121.41, 124, 120.42, 123.99],
  [1615901400000, 125.7, 127.22, 124.72, 125.57],
  [1615987800000, 124.05, 125.86, 122.34, 124.76],
  [1616074200000, 122.88, 123.18, 120.32, 120.53],
  [1616160600000, 119.9, 121.43, 119.68, 119.99],
  [1616419800000, 120.33, 123.87, 120.26, 123.39],
  [1616506200000, 123.33, 124.24, 122.14, 122.54],
  [1616592600000, 122.82, 122.9, 120.07, 120.09],
  [1616679000000, 119.54, 121.66, 119, 120.59],
  [1616765400000, 120.35, 121.48, 118.92, 121.21],
  [1617024600000, 121.65, 122.58, 120.73, 121.39],
  [1617111000000, 120.11, 120.4, 118.86, 119.9],
  [1617197400000, 121.65, 123.52, 121.15, 122.15],
  [1617283800000, 123.66, 124.18, 122.49, 123],
  [1617629400000, 123.87, 126.16, 123.07, 125.9],
  [1617715800000, 126.5, 127.13, 125.65, 126.21],
  [1617802200000, 125.83, 127.92, 125.14, 127.9],
  [1617888600000, 128.95, 130.39, 128.52, 130.36],
  [1617975000000, 129.8, 133.04, 129.47, 133],
  [1618234200000, 132.52, 132.85, 130.63, 131.24],
  [1618320600000, 132.44, 134.66, 131.93, 134.43],
  [1618407000000, 134.94, 135, 131.66, 132.03],
  [1618493400000, 133.82, 135, 133.64, 134.5],
  [1618579800000, 134.3, 134.67, 133.28, 134.16],
  [1618839000000, 133.51, 135.47, 133.34, 134.84],
  [1618925400000, 135.02, 135.53, 131.81, 133.11],
  [1619011800000, 132.36, 133.75, 131.3, 133.5],
  [1619098200000, 133.04, 134.15, 131.41, 131.94],
  [1619184600000, 132.16, 135.12, 132.16, 134.32],
  [1619443800000, 134.83, 135.06, 133.56, 134.72],
  [1619530200000, 135.01, 135.41, 134.11, 134.39],
  [1619616600000, 134.31, 135.02, 133.08, 133.58],
  [1619703000000, 136.47, 137.07, 132.45, 133.48],
  [1619789400000, 131.78, 133.56, 131.07, 131.46],
  [1620048600000, 132.04, 134.07, 131.83, 132.54],
  [1620135000000, 131.19, 131.49, 126.7, 127.85],
  [1620221400000, 129.2, 130.45, 127.97, 128.1],
  [1620307800000, 127.89, 129.75, 127.13, 129.74],
  [1620394200000, 130.85, 131.26, 129.48, 130.21],
  [1620653400000, 129.41, 129.54, 126.81, 126.85],
  [1620739800000, 123.5, 126.27, 122.77, 125.91],
  [1620826200000, 123.4, 124.64, 122.25, 122.77],
  [1620912600000, 124.58, 126.15, 124.26, 124.97],
  [1620999000000, 126.25, 127.89, 125.85, 127.45],
  [1621258200000, 126.82, 126.93, 125.17, 126.27],
  [1621344600000, 126.56, 126.99, 124.78, 124.85],
  [1621431000000, 123.16, 124.92, 122.86, 124.69],
  [1621517400000, 125.23, 127.72, 125.1, 127.31],
  [1621603800000, 127.82, 128, 125.21, 125.43],
  [1621863000000, 126.01, 127.94, 125.94, 127.1],
  [1621949400000, 127.82, 128.32, 126.32, 126.9],
  [1622035800000, 126.96, 127.39, 126.42, 126.85],
  [1622122200000, 126.44, 127.64, 125.08, 125.28],
  [1622208600000, 125.57, 125.8, 124.55, 124.61],
  [1622554200000, 125.08, 125.35, 123.94, 124.28],
  [1622640600000, 124.28, 125.24, 124.05, 125.06],
  [1622727000000, 124.68, 124.85, 123.13, 123.54],
  [1622813400000, 124.07, 126.16, 123.85, 125.89],
  [1623072600000, 126.17, 126.32, 124.83, 125.9],
  [1623159000000, 126.6, 128.46, 126.21, 126.74],
  [1623245400000, 127.21, 127.75, 126.52, 127.13],
  [1623331800000, 127.02, 128.19, 125.94, 126.11],
  [1623418200000, 126.53, 127.44, 126.1, 127.35],
  [1623677400000, 127.82, 130.54, 127.07, 130.48],
  [1623763800000, 129.94, 130.6, 129.39, 129.64],
  [1623850200000, 130.37, 130.89, 128.46, 130.15],
  [1623936600000, 129.8, 132.55, 129.65, 131.79],
  [1624023000000, 130.71, 131.51, 130.24, 130.46],
  [1624282200000, 130.3, 132.41, 129.21, 132.3],
  [1624368600000, 132.13, 134.08, 131.62, 133.98],
  [1624455000000, 133.77, 134.32, 133.23, 133.7],
  [1624541400000, 134.45, 134.64, 132.93, 133.41],
  [1624627800000, 133.46, 133.89, 132.81, 133.11],
  [1624887000000, 133.41, 135.25, 133.35, 134.78],
  [1624973400000, 134.8, 136.49, 134.35, 136.33],
  [1625059800000, 136.17, 137.41, 135.87, 136.96],
  [1625146200000, 136.6, 137.33, 135.76, 137.27],
  [1625232600000, 137.9, 140, 137.75, 139.96],
  [1625578200000, 140.07, 143.15, 140.07, 142.02],
  [1625664600000, 143.54, 144.89, 142.66, 144.57],
  [1625751000000, 141.58, 144.06, 140.67, 143.24],
  [1625837400000, 142.75, 145.65, 142.65, 145.11],
  [1626096600000, 146.21, 146.32, 144, 144.5],
  [1626183000000, 144.03, 147.46, 143.63, 145.64],
  [1626269400000, 148.1, 149.57, 147.68, 149.15],
  [1626355800000, 149.24, 150, 147.09, 148.48],
  [1626442200000, 148.46, 149.76, 145.88, 146.39],
  [1626701400000, 143.75, 144.07, 141.67, 142.45],
  [1626787800000, 143.46, 147.1, 142.96, 146.15],
  [1626874200000, 145.53, 146.13, 144.63, 145.4],
  [1626960600000, 145.94, 148.2, 145.81, 146.8],
  [1627047000000, 147.55, 148.72, 146.92, 148.56],
  [1627306200000, 148.27, 149.83, 147.7, 148.99],
  [1627392600000, 149.12, 149.21, 145.55, 146.77],
  [1627479000000, 144.81, 146.97, 142.54, 144.98],
  [1627565400000, 144.69, 146.55, 144.58, 145.64],
  [1627651800000, 144.38, 146.33, 144.11, 145.86],
  [1627911000000, 146.36, 146.95, 145.25, 145.52],
  [1627997400000, 145.81, 148.04, 145.18, 147.36],
  [1628083800000, 147.27, 147.79, 146.28, 146.95],
  [1628170200000, 146.98, 147.84, 146.17, 147.06],
  [1628256600000, 146.35, 147.11, 145.63, 146.14],
  [1628515800000, 146.2, 146.7, 145.52, 146.09],
  [1628602200000, 146.44, 147.71, 145.3, 145.6],
  [1628688600000, 146.05, 146.72, 145.53, 145.86],
  [1628775000000, 146.19, 149.05, 145.84, 148.89],
  [1628861400000, 148.97, 149.44, 148.27, 149.1],
  [1629120600000, 148.54, 151.19, 146.47, 151.12],
  [1629207000000, 150.23, 151.68, 149.09, 150.19],
  [1629293400000, 149.8, 150.72, 146.15, 146.36],
  [1629379800000, 145.03, 148, 144.5, 146.7],
  [1629466200000, 147.44, 148.5, 146.78, 148.19],
  [1629725400000, 148.31, 150.19, 147.89, 149.71],
  [1629811800000, 149.45, 150.86, 149.15, 149.62],
  [1629898200000, 149.81, 150.32, 147.8, 148.36],
  [1629984600000, 148.35, 149.12, 147.51, 147.54],
  [1630071000000, 147.48, 148.75, 146.83, 148.6],
  [1630330200000, 149, 153.49, 148.61, 153.12],
  [1630416600000, 152.66, 152.8, 151.29, 151.83],
  [1630503000000, 152.83, 154.98, 152.34, 152.51],
  [1630589400000, 153.87, 154.72, 152.4, 153.65],
  [1630675800000, 153.76, 154.63, 153.09, 154.3],
  [1631021400000, 154.97, 157.26, 154.39, 156.69],
  [1631107800000, 156.98, 157.04, 153.98, 155.11],
  [1631194200000, 155.49, 156.11, 153.95, 154.07],
  [1631280600000, 155, 155.48, 148.7, 148.97],
  [1631539800000, 150.63, 151.42, 148.75, 149.55],
  [1631626200000, 150.35, 151.07, 146.91, 148.12],
  [1631712600000, 148.56, 149.44, 146.37, 149.03],
  [1631799000000, 148.44, 148.97, 147.22, 148.79],
  [1631885400000, 148.82, 148.82, 145.76, 146.06],
  [1632144600000, 143.8, 144.84, 141.27, 142.94],
  [1632231000000, 143.93, 144.6, 142.78, 143.43],
  [1632317400000, 144.45, 146.43, 143.7, 145.85],
  [1632403800000, 146.65, 147.08, 145.64, 146.83],
  [1632490200000, 145.66, 147.47, 145.56, 146.92],
  [1632749400000, 145.47, 145.96, 143.82, 145.37],
  [1632835800000, 143.25, 144.75, 141.69, 141.91],
  [1632922200000, 142.47, 144.45, 142.03, 142.83],
  [1633008600000, 143.66, 144.38, 141.28, 141.5],
  [1633095000000, 141.9, 142.92, 139.11, 142.65],
  [1633354200000, 141.76, 142.21, 138.27, 139.14],
  [1633440600000, 139.49, 142.24, 139.36, 141.11],
  [1633527000000, 139.47, 142.15, 138.37, 142],
  [1633613400000, 143.06, 144.22, 142.72, 143.29],
  [1633699800000, 144.03, 144.18, 142.56, 142.9],
  [1633959000000, 142.27, 144.81, 141.81, 142.81],
  [1634045400000, 143.23, 143.25, 141.04, 141.51],
  [1634131800000, 141.24, 141.4, 139.2, 140.91],
  [1634218200000, 142.11, 143.88, 141.51, 143.76],
  [1634304600000, 143.77, 144.9, 143.51, 144.84],
  [1634563800000, 143.45, 146.84, 143.16, 146.55],
  [1634650200000, 147.01, 149.17, 146.55, 148.76],
  [1634736600000, 148.7, 149.75, 148.12, 149.26],
  [1634823000000, 148.81, 149.64, 147.87, 149.48],
  [1634909400000, 149.69, 150.18, 148.64, 148.69],
  [1635168600000, 148.68, 149.37, 147.62, 148.64],
  [1635255000000, 149.33, 150.84, 149.01, 149.32],
  [1635341400000, 149.36, 149.73, 148.49, 148.85],
  [1635427800000, 149.82, 153.17, 149.72, 152.57],
  [1635514200000, 147.22, 149.94, 146.41, 149.8],
  [1635773400000, 148.99, 149.7, 147.8, 148.96],
  [1635859800000, 148.66, 151.57, 148.65, 150.02],
  [1635946200000, 150.39, 151.97, 149.82, 151.49],
  [1636032600000, 151.58, 152.43, 150.64, 150.96],
  [1636119000000, 151.89, 152.2, 150.06, 151.28],
  [1636381800000, 151.41, 151.57, 150.16, 150.44],
  [1636468200000, 150.2, 151.43, 150.06, 150.81],
  [1636554600000, 150.02, 150.13, 147.85, 147.92],
  [1636641000000, 148.96, 149.43, 147.68, 147.87],
  [1636727400000, 148.43, 150.4, 147.48, 149.99],
  [1636986600000, 150.37, 151.88, 149.43, 150],
  [1637073000000, 149.94, 151.49, 149.34, 151],
  [1637159400000, 151, 155, 150.99, 153.49],
  [1637245800000, 153.71, 158.67, 153.05, 157.87],
  [1637332200000, 157.65, 161.02, 156.53, 160.55],
  [1637591400000, 161.68, 165.7, 161, 161.02],
  [1637677800000, 161.12, 161.8, 159.06, 161.41],
  [1637764200000, 160.75, 162.14, 159.64, 161.94],
  [1637937000000, 159.57, 160.45, 156.36, 156.81],
  [1638196200000, 159.37, 161.19, 158.79, 160.24],
  [1638282600000, 159.99, 165.52, 159.92, 165.3],
  [1638369000000, 167.48, 170.3, 164.53, 164.77],
  [1638455400000, 158.74, 164.2, 157.8, 163.76],
  [1638541800000, 164.02, 164.96, 159.72, 161.84],
  [1638801000000, 164.29, 167.88, 164.28, 165.32],
  [1638887400000, 169.08, 171.58, 168.34, 171.18],
  [1638973800000, 172.13, 175.96, 170.7, 175.08],
  [1639060200000, 174.91, 176.75, 173.92, 174.56],
  [1639146600000, 175.21, 179.63, 174.69, 179.45],
  [1639405800000, 181.12, 182.13, 175.53, 175.74],
  [1639492200000, 175.25, 177.74, 172.21, 174.33],
  [1639578600000, 175.11, 179.5, 172.31, 179.3],
  [1639665000000, 179.28, 181.14, 170.75, 172.26],
  [1639751400000, 169.93, 173.47, 169.69, 171.14],
  [1640010600000, 168.28, 170.58, 167.46, 169.75],
  [1640097000000, 171.56, 173.2, 169.12, 172.99],
  [1640183400000, 173.04, 175.86, 172.15, 175.64],
  [1640269800000, 175.85, 176.85, 175.27, 176.28],
  [1640615400000, 177.09, 180.42, 177.07, 180.33],
  [1640701800000, 180.16, 181.33, 178.53, 179.29],
  [1640788200000, 179.33, 180.63, 178.14, 179.38],
  [1640874600000, 179.47, 180.57, 178.09, 178.2],
  [1640961000000, 178.09, 179.23, 177.26, 177.57],
  [1641220200000, 177.83, 182.88, 177.71, 182.01],
  [1641306600000, 182.63, 182.94, 179.12, 179.7],
  [1641393000000, 179.61, 180.17, 174.64, 174.92],
  [1641479400000, 172.7, 175.3, 171.64, 172],
  [1641565800000, 172.89, 174.14, 171.03, 172.17],
  [1641825000000, 169.08, 172.5, 168.17, 172.19],
  [1641911400000, 172.32, 175.18, 170.82, 175.08],
  [1641997800000, 176.12, 177.18, 174.82, 175.53],
  [1642084200000, 175.78, 176.62, 171.79, 172.19],
  [1642170600000, 171.34, 173.78, 171.09, 173.07],
  [1642516200000, 171.51, 172.54, 169.41, 169.8],
  [1642602600000, 170, 171.08, 165.94, 166.23],
  [1642689000000, 166.98, 169.68, 164.18, 164.51],
  [1642775400000, 164.42, 166.33, 162.3, 162.41],
  [1643034600000, 160.02, 162.3, 154.7, 161.62],
  [1643121000000, 158.98, 162.76, 157.02, 159.78],
  [1643207400000, 163.5, 164.39, 157.82, 159.69],
  [1643293800000, 162.45, 163.84, 158.28, 159.22],
  [1643380200000, 165.71, 170.35, 162.8, 170.33],
  [1643639400000, 170.16, 175, 169.51, 174.78],
  [1643725800000, 174.01, 174.84, 172.31, 174.61],
  [1643812200000, 174.75, 175.88, 173.33, 175.84],
  [1643898600000, 174.48, 176.24, 172.12, 172.9],
  [1643985000000, 171.68, 174.1, 170.68, 172.39],
  [1644244200000, 172.86, 173.95, 170.95, 171.66],
  [1644330600000, 171.73, 175.35, 171.43, 174.83],
  [1644417000000, 176.05, 176.65, 174.9, 176.28],
  [1644503400000, 174.14, 175.48, 171.55, 172.12],
  [1644589800000, 172.33, 173.08, 168.04, 168.64],
  [1644849000000, 167.37, 169.58, 166.56, 168.88],
  [1644935400000, 170.97, 172.95, 170.25, 172.79],
  [1645021800000, 171.85, 173.34, 170.05, 172.55],
  [1645108200000, 171.03, 171.91, 168.47, 168.88],
  [1645194600000, 169.82, 170.54, 166.19, 167.3],
  [1645540200000, 164.98, 166.69, 162.15, 164.32],
  [1645626600000, 165.54, 166.15, 159.75, 160.07],
  [1645713000000, 152.58, 162.85, 152, 162.74],
  [1645799400000, 163.84, 165.12, 160.87, 164.85],
  [1646058600000, 163.06, 165.42, 162.43, 165.12],
  [1646145000000, 164.7, 166.6, 161.97, 163.2],
  [1646231400000, 164.39, 167.36, 162.95, 166.56],
  [1646317800000, 168.47, 168.91, 165.55, 166.23],
  [1646404200000, 164.49, 165.55, 162.1, 163.17],
  [1646663400000, 163.36, 165.02, 159.04, 159.3],
  [1646749800000, 158.82, 162.88, 155.8, 157.44],
  [1646836200000, 161.48, 163.41, 159.41, 162.95],
  [1646922600000, 160.2, 160.39, 155.98, 158.52],
  [1647009000000, 158.93, 159.28, 154.5, 154.73],
  [1647264600000, 151.45, 154.12, 150.1, 150.62],
  [1647351000000, 150.9, 155.57, 150.38, 155.09],
  [1647437400000, 157.05, 160, 154.46, 159.59],
  [1647523800000, 158.61, 161, 157.63, 160.62],
  [1647610200000, 160.51, 164.48, 159.76, 163.98],
  [1647869400000, 163.51, 166.35, 163.01, 165.38],
  [1647955800000, 165.51, 169.42, 164.91, 168.82],
  [1648042200000, 167.99, 172.64, 167.65, 170.21],
  [1648128600000, 171.06, 174.14, 170.21, 174.07],
  [1648215000000, 173.88, 175.28, 172.75, 174.72],
  [1648474200000, 172.17, 175.73, 172, 175.6],
  [1648560600000, 176.69, 179.01, 176.34, 178.96],
  [1648647000000, 178.55, 179.61, 176.7, 177.77],
  [1648733400000, 177.84, 178.03, 174.4, 174.61],
  [1648819800000, 174.03, 174.88, 171.94, 174.31],
  [1649079000000, 174.57, 178.49, 174.44, 178.44],
  [1649165400000, 177.5, 178.3, 174.42, 175.06],
  [1649251800000, 172.36, 173.63, 170.13, 171.83],
  [1649338200000, 171.16, 173.36, 169.85, 172.14],
  [1649424600000, 171.78, 171.78, 169.2, 170.09],
  [1649683800000, 168.71, 169.03, 165.5, 165.75],
  [1649770200000, 168.02, 169.87, 166.64, 167.66],
  [1649856600000, 167.39, 171.04, 166.77, 170.4],
  [1649943000000, 170.62, 171.27, 165.04, 165.29],
  [1650288600000, 163.92, 166.6, 163.57, 165.07],
  [1650375000000, 165.02, 167.82, 163.91, 167.4],
  [1650461400000, 168.76, 168.88, 166.1, 167.23],
  [1650547800000, 168.91, 171.53, 165.91, 166.42],
  [1650634200000, 166.46, 167.87, 161.5, 161.79],
  [1650893400000, 161.12, 163.17, 158.46, 162.88],
  [1650979800000, 162.25, 162.34, 156.72, 156.8],
  [1651066200000, 155.91, 159.79, 155.38, 156.57],
  [1651152600000, 159.25, 164.52, 158.93, 163.64],
  [1651239000000, 161.84, 166.2, 157.25, 157.65],
  [1651498200000, 156.71, 158.23, 153.27, 157.96],
  [1651584600000, 158.15, 160.71, 156.32, 159.48],
  [1651671000000, 159.67, 166.48, 159.26, 166.02],
  [1651757400000, 163.85, 164.08, 154.95, 156.77],
  [1651843800000, 156.01, 159.44, 154.18, 157.28],
  [1652103000000, 154.93, 155.83, 151.49, 152.06],
  [1652189400000, 155.52, 156.74, 152.93, 154.51],
  [1652275800000, 153.5, 155.45, 145.81, 146.5],
  [1652362200000, 142.77, 146.2, 138.8, 142.56],
  [1652448600000, 144.59, 148.1, 143.11, 147.11],
  [1652707800000, 145.55, 147.52, 144.18, 145.54],
  [1652794200000, 148.86, 149.77, 146.68, 149.24],
  [1652880600000, 146.85, 147.36, 139.9, 140.82],
  [1652967000000, 139.88, 141.66, 136.6, 137.35],
  [1653053400000, 139.09, 140.7, 132.61, 137.59],
  [1653312600000, 137.79, 143.26, 137.65, 143.11],
  [1653399000000, 140.81, 141.97, 137.33, 140.36],
  [1653485400000, 138.43, 141.79, 138.34, 140.52],
  [1653571800000, 137.39, 144.34, 137.14, 143.78],
  [1653658200000, 145.39, 149.68, 145.26, 149.64],
  [1654003800000, 149.07, 150.66, 146.84, 148.84],
  [1654090200000, 149.9, 151.74, 147.68, 148.71],
  [1654176600000, 147.83, 151.27, 146.86, 151.21],
  [1654263000000, 146.9, 147.97, 144.46, 145.38],
  [1654522200000, 147.03, 148.57, 144.9, 146.14],
  [1654608600000, 144.35, 149, 144.1, 148.71],
  [1654695000000, 148.58, 149.87, 147.46, 147.96],
  [1654781400000, 147.08, 147.95, 142.53, 142.64],
  [1654867800000, 140.28, 140.76, 137.06, 137.13],
  [1655127000000, 132.87, 135.2, 131.44, 131.88],
  [1655213400000, 133.13, 133.89, 131.48, 132.76],
  [1655299800000, 134.29, 137.34, 132.16, 135.43],
  [1655386200000, 132.08, 132.39, 129.04, 130.06],
  [1655472600000, 130.07, 133.08, 129.81, 131.56],
  [1655818200000, 133.42, 137.06, 133.32, 135.87],
  [1655904600000, 134.79, 137.76, 133.91, 135.35],
  [1655991000000, 136.82, 138.59, 135.63, 138.27],
  [1656077400000, 139.9, 141.91, 139.77, 141.66],
  [1656336600000, 142.7, 143.49, 140.97, 141.66],
];
export default data;
