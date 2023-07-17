  AFRAME .registerComponent('scuba-rotation',{
    schema:{
        speed_of_rotation:{type:'number', default:0},
        speed_of_position:{type:'number',default:0}
    },
    init: function(){
        
        window.addEventListener('keydown',(e)=>{

            this.data.speed_of_rotation = this.el.getAttribute('rotation')
            this.data.speed_of_position = this.el.getAttribute('position')
            var scuba_rotation = this.data.speed_of_rotation
            var scuba_position= this.data.speed_of_position

            
            
            if (e.key === 'ArrowRight'){
                if(scuba_rotation.x < 10){
                     scuba_rotation.x +=0.5
                     this.el.setAttribute('rotation',scuba_rotation)
                } 
             }
             if (e.key === 'ArrowLeft'){
                 if(scuba_rotation.x > -10){
                     scuba_rotation.x-=0.5
                     this.el.setAttribute('rotation',scuba_rotation)
                 } 
              }
              if (e.key === 'ArrowUp'){
                 if(scuba_rotation.z < 20){
                     scuba_rotation.z+=0.5
                     this.el.setAttribute('rotation',scuba_rotation)
                 }
                 if(scuba_position.y < 2){
                     scuba_position.y+=0.01
                     this.el.setAttribute('position',scuba_position)
                 } 
             }

             
            if (e.key === 'ArrowDown'){
                if(scuba_rotation.z > -12){
                    scuba_rotation.z-=0.5
                    this.el.setAttribute('rotation',scuba_rotation)
                }
                if(scuba_position.y >-12){
                    scuba_position.y-=0.01
                    this.el.setAttribute('position',scuba_position)
                }
                }
              });
            }
          });
          




