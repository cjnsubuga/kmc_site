import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='art1'>
      
        <h1 className='mb-3 mt-12 text-4xl font-bold lg:text-5xl lg:leading-tight'> Pioneering African Innovation</h1> 
    
      
        {/* prettier-ignore */}
        <p className='article-like'>
        Discover the Kiira EV, Africa's first electric vehicle, 
        launched on November 24, 2011. 
        Experience the luxury of the 4-seater Kiira EVS and the eco-friendly innovation of the Kayoola Solar Bus,
         Africa's first solar-powered bus. Embrace the future of sustainable mobility with Kiira Motors Corporation </p>
        <div className='all3' style={{ display: 'flex', borderRadius: '15px', overflow: 'hidden'}}>
          <img 
            src="https://s3-alpha-sig.figma.com/img/2253/5e6a/98d82c4606eb90e3cafff673b6c1a501?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XyGjWhCoGq7I5ieFsk7Cix4h8FsnTvlaEpfxRu4MTxU2HS4kAld6votv--niZPNNhuwMhoqMM3EfgEamymTYnXvBRDlQDO7gnQz03-y5lkafpnVz~Bp4ykT5h~1SFPq8mrOJ3f33e4nKL5b0AATriSZqrgG147kQ-3s~pPX8u4XJuD0gcUQNQXPSstwisdb~ardWDxUcS4h9hG7UZ8Apiy1EGNvH8cECcHvAWtTWQPlnlHopyVQRSDqmiIFgOL9AZkPI2sI3kSZyOuv7ZmxkufN4lBA-5M6f1gnbx6MhHmP915KEGTf-dJpFJf1vtmhjtQRD-r1phqbXklk49TgEOQ__" 
            alt="Image 1" 
            style={{ width: '30%', margin:'0' }} 
          />
          <img 
            src="https://s3-alpha-sig.figma.com/img/98f5/6fe8/c63216c68c1f4cd421def3b1d4c242ef?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kLruKyYGWFZ1fnw3PWj0~z7iK-XgP1S6mHEE17ClunVzTvN5Pmr67uR3ZKZ7z-MEgCyqaXHCiXwkx3q71cRi18WWBY8RaZk0TFxgKJHKaGeBxwIwwZwFyMRuSW1BSQp6GyROVMzoAAPCtzj~mXLt-RFxdkf64jWrCH9dGeMhf9ZHMeizfP2~VkfUmuEBee3rzkbew2MNtNcXK4mn7gmMHhlagygXd9IGvCEB4g9lCqZmdxYmeLoB9P8g5u9uxrfE4-5ZtN2KuyTjFJ2YotWEnSO54RRwaCBzmmrbqv1D-fW7IBqll8FjZKEUtsD2bl-6CoEtLHQ4j2kCZpgQ-RfK2g__" 
            alt="Image 2" 
            style={{ width: '30%', margin:'0' }} 
          />
          <img 
            src="https://s3-alpha-sig.figma.com/img/261f/dc89/7796259bad620f001f1748d9834728f6?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YR-h0bRVCuSolDd0I4~-PpCe1qWl3fyzZz1~6zgVWQyvSuxOfwOe0JGIvtlIdmr5UHL2A6RD326w7IQ0mejiMaAz1g3VKxoMbIFdqiJ2oPST-x0peEpxTkK6EriFAKAqJaGHrMwTMF6ALS5bQJh106TWsKbFLJsJrHNEHiK5QAXW9FzOZBB8KDf8HY889mPfso1mVbTMQE9r4hJY~XSvGCPyyck7yirSUTnWxYwYZ97TFOgavasCvgZUncYNK4TH~VOYSEMvlEMiI9KC~mC4DT2uA1UGUS1P8d~VXLwOq1BAwNnol1gXpP~T~aqttiTzux3W4LC9KRS0ybUeM7csPA__" 
            alt="Image 3" 
            style={{ width: '30%', margin:'0', borderRadius:'0px 15px 15px 0px'}} 
          />
       </div>
    
      </div>
      
      <div id='art2'>
     <h1 className='mb-3 mt-12 text-4xl font-bold lg:text-5xl lg:leading-tight text-center'>Kiira EV</h1>
        {/* prettier-ignore */}
        <p className='article-like'>
        The Kiira EV is Africa’s first electric vehicle launched on 24th November 2011. 
        It employs a simple battery electric vehicle powertrain consisting of an Energy storage bank, energy converter and an electric motor.
         It is powered by electricity which is stored in the battery bank through repetitive charging. </p>
        
      
      </div>
      <div id='art3'>
      <h1 className='mb-3 mt-12 text-4xl font-bold lg:text-5xl lg:leading-tight text-center'>Kiira EVS</h1>
      
        {/* prettier-ignore */}
        <p className='article-like'>
        The Kiira EVS is a 4-Seater Executive Vehicle built off the Kiira EV SMACK Platform fitted with a 2 liter petrol engine,
         5 speed automatic transmission and an exquisite beige interior trim. </p>
        
      
      </div>

      <div id='art4'>
      <h1 className='mb-3 mt-12 text-4xl font-bold lg:text-5xl lg:leading-tight text-center'>Kayoola Solar Bus</h1>
      
        {/* prettier-ignore */}
        <p className='article-like'>
        The first of its kind on the African continent. It relies on lithium-ion batteries to power an electric motor that is coupled to a 2-speed pneumatic shift transmission. 
        This technology serves to conserve the environment and public  </p>
        
  
      </div>
    </div>
  );
}

export default App;
