/** 
 * @param {HTMLTableCellElement} table
 * @param {*} column
 * @param {*} asc
*/


document.addEventListener('DOMContentLoaded', () => {

    var json = [{"disaster_id":"DIS008","agency_id":"NDMA001","disaster_type_id":"Earthquake","status_id":"Fulfilled","severity_id":"Mild","start_date":"30-05-2023","location":"Disaster in DKI Jakarta","affected_population":500,"fatalities":1000,"longitude":"106.8270488","latitude":"-6.175247","country_id":"ID","postal_code":"12345","state_province_id":"DKI Jakarta","city_id":"Jakarta"}
    ,{"disaster_id":"DIS009","agency_id":"NDMA001","disaster_type_id":"Earthquake","status_id":"Ongoing","severity_id":"Moderate","start_date":"30-05-2023","location":"Jakarta Pusat","affected_population":2000,"longitude":"95.323753","latitude":"5.54829","country_id":"ID","postal_code":"12345","state_province_id":"DKI Jakarta","city_id":"Jakarta"}
    ,{"disaster_id":"D-221","agency_id":"NDMA003","disaster_type_id":"Cyclone","status_id":"Ongoing","severity_id":"Critical","start_date":"12-07-2023","location":"Indo","longitude":"119.8722373","latitude":"-0.9051548","country_id":"ID","postal_code":"16121","state_province_id":"Sulawesi Tengah","city_id":"Palu"}
    ,{"disaster_id":"DIS001","agency_id":"NDMA001","disaster_type_id":"Earthquake","status_id":"Resolved","severity_id":"Severe","start_date":"15-01-2022","end_date":"20-01-2022","location":"Banda Aceh","affected_population":10000,"fatalities":1500,"cause":"Tectonic activity","description":"A major earthquake with a magnitude of 7.2 struck Banda Aceh. It caused significant damage to infrastructure and resulted in numerous casualties.","longitude":"95.323753","latitude":"5.54829","country_id":"ID","postal_code":"23111","state_province_id":"Aceh","city_id":"Banda Aceh"}
    ,{"disaster_id":"DIS002","agency_id":"NDMA002","disaster_type_id":"Flood","status_id":"Ongoing","severity_id":"Moderate","start_date":"05-03-2022","end_date":"10-03-2022","location":"Jakarta Pusat","affected_population":5000,"fatalities":20,"cause":"Heavy rainfall","description":"Intense rainfall led to severe flooding in Jakarta Pusat area. Several neighborhoods were affected and emergency evacuations were carried out.","longitude":"106.816666","latitude":"-6.2","country_id":"ID","postal_code":"10110","state_province_id":"DKI Jakarta","city_id":"Jakarta"}
    ,{"disaster_id":"DIS003","agency_id":"NDMA001","disaster_type_id":"Landslide","status_id":"Resolved","severity_id":"Mild","start_date":"12-04-2022","end_date":"12-04-2022","location":"Bandung","affected_population":100,"fatalities":0,"cause":"Soil erosion","description":"Due to heavy rain, a landslide occurred in Bandung. It resulted in minor damage to roads and no reported casualties.","longitude":"107.60981","latitude":"-6.914744","country_id":"ID","postal_code":"40111","state_province_id":"West Java","city_id":"Bandung"}
    ,{"disaster_id":"DIS004","agency_id":"NDMA003","disaster_type_id":"Volcanic Eruption","status_id":"Ongoing","severity_id":"Severe","start_date":"20-05-2022","location":"Mount Merapi","affected_population":5000,"fatalities":10,"cause":"Volcanic activity","description":"Mount Merapi experienced a major eruption, spewing ash and volcanic gases. The surrounding areas were affected, and precautionary measures were taken.","longitude":"110.474","latitude":"7.5361","country_id":"ID","postal_code":"55281","state_province_id":"West Java","city_id":"Yogyakarta"}
    ,{"disaster_id":"DIS005","agency_id":"NDMA002","disaster_type_id":"Tsunami","status_id":"Ongoing","severity_id":"Critical","start_date":"02-07-2022","location":"Palu","affected_population":20000,"fatalities":2500,"cause":"Underwater earthquake","description":"A powerful underwater earthquake triggered a devastating tsunami in Palu. The coastal areas were severely impacted, resulting in a high number of casualties.","longitude":"119.84","latitude":"-0.8917","country_id":"ID","postal_code":"94111","state_province_id":"Sulawesi Tengah","city_id":"Palu"}
    ,{"disaster_id":"DIS006","agency_id":"NDMA003","disaster_type_id":"Drought","status_id":"Resolved","severity_id":"Moderate","start_date":"10-08-2022","location":"Tanjung","affected_population":500000,"fatalities":50,"cause":"Water shortage","description":"Tanjung region experienced a prolonged period of drought, causing water shortages and affecting agriculture and livestock.","longitude":"115.2395","latitude":"2.8497","country_id":"ID","postal_code":"71511","state_province_id":"Kalimantan Selatan","city_id":"Tabalong"}
    ,{"disaster_id":"DIS007","agency_id":"NDMA001","disaster_type_id":"Wildfire","status_id":"Ongoing","severity_id":"Severe","start_date":"18-09-2022","end_date":"25-09-2022","location":"Pekanbaru","affected_population":100000,"fatalities":1000,"cause":"Forest fire","description":"Extensive forest fires broke out in Pekanbaru, resulting in large-scale damage to the ecosystem and air pollution.","longitude":"101.4478","latitude":"0.5071","country_id":"ID","postal_code":"28114","state_province_id":"Riau","city_id":"Pekanbaru"}
    ];

    var categories = [], data1 = [];
    for(var i in json){

        var dis_type = (json[i].disaster_id);
        categories.push(dis_type);

        data1.push(parseInt(json[i].affected_population));
    }


    Highcharts.chart('container', {
        chart:{
            type: 'column',
            zoomType: 'x'
        },

        title:{
            text: 'Population Affected'
        },

        xAxis:{
            categories: categories,
            crosshair: true
        },
        yAxis:{
            min:0,
            title:{
                text: 'Total disaster'
            },
        },
        series:[{
            name:'disaster_type_id',
            data: data1
        
        }]


    });

    

    buildTable(json)

    function buildTable(data){
        var table = document.getElementById('table')

        for(var i = 0; i <data.length; i++){
            var row = `<tr>
                            <td>${data[i].disaster_id}</td>
                            <td>${data[i].agency_id}</td>
                            <td>${data[i].disaster_type_id}</td>
                            <td>${data[i].status_id}</td>
                            <td>${data[i].severity_id}</td>
                            <td>${data[i].start_date}</td>
                            <td>${data[i].location}</td>
                            <td>${data[i].affected_population}</td>
                            <td>${data[i].fatalities}</td>
                            <td>${data[i].longitude}</td>
                            <td>${data[i].latitude}</td>
                            <td>${data[i].country_id}</td>
                            <td>${data[i].postal_code}</td>
                            <td>${data[i].state_province_id}</td>
                            <td>${data[i].city_id}</td>
                    </tr>`
                table.innerHTML += row
        }
    }

    function sortTableByColumn(table, column, asc = true){
        const dirModifier = asc ? 1 : -1;
        const tBody = table.tBodies[0];
        const rows = Array.from(tBody.querySelectorAll("tr"));

        const sortedRows = rows.sort((a,b) =>{
            const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContext.trim();
            const bColText = b.querySelector(`td:nth-child(${column + 1})`).textContext.trim();

            return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
        });

        while(tBody.firstChild){
            tBody.removeChild(tBody.firstChild);
        }

        tBody.append(...sortedRows);
    
    }

    sortTableByColumn(document.querySelector("table"), 7, false);

})