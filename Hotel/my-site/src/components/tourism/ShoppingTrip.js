import React from 'react';
import ShoppingCenter from './ShoppingCenter';
import ShoppingTripSlider from './ShoppingTripSlider'
import img1 from '../../image/tourism/small6.jpeg';
import img2 from '../../image/tourism/small7.jpeg';
import img3 from '../../image/tourism/small8.jpeg';
import img4 from '../../image/tourism/small9.jpeg';
import img5 from '../../image/tourism/small10.jpeg';
import img6 from '../../image/tourism/small11.jpeg';

const ShoppingTrip = ({setFlag}) => {
   
        const places = [
            {id:1, image:img1, title: 'مجموعه تجاری بام لند، تهران ', description: 'گروه مهندسی توسعه بام مراکزی را تاسیس کرده است که در آن مردم نه تنها قادر به استراحت و تجدید انرژی هستند بلکه میتوانند به خرید و تفریح هم مشغول باشند. این مراکزبرای انجام تفریحات و کارهای اداری طراحی شده اند. اولین مجموعه توسط گروه بام طراحی و و درغرب تهران در همسایگی دریاچه خلیج فارس ساخته شد. بام لند شامل فضاهای فرهنگی، تفریحی و تجاری است. فاصله این مجموعه تا هتل ٢٠ کیلومتر است.'},
            {id:2, image:img2, title:'پالادیموم، تهران', description:'مرکز خرید لوکس پالادیوم واقع درزعفرانیه ١٥٠.٠٠٠مترمربع وسعت دارد و شامل ١٥٠ شرکت در دو برج (شمال و جنوب)، ٢٠٠ فروشگاه برند ، ٢٤ رستوران (فود کورت، کافی شاپ ها و غذا خوری)، هایپر مارکت بزرگ ، سرزمین کتاب، بزرگترین فروشگاه اسباب بازی در خاورمیانه، مرکز لوکس ورزشی در طبقه ٦ با نمای کلی شهر، ٢٦ آسانسور، بیش از ١٢٠٠ پارکینگ و امکانات بسیار دیگری است. این مرکز خرید لوکس به دنبال افراد نخبه، با انگیزه و پر انرژی برای پیوستن به تیم کارشناسان می باشد تا عاملی برای پیشرفت های فوق العاده درآینده باشد. مرکز خرید لوکس پالادیوم اولین نوع خود در تهران است که آینده ای روشن دارد. فاصله این مرکز تا هتل ١٥ کیلومتر است.'},
            {id:3, image:img3, title:'مجتمع تجاری ارگ تهران ', description: 'مجتمع تجاری ارگ، مجموعه ای کامل از معروف ترین مارک های موجود در ایران از جمله لباس، لوازم آرایشی، لوازم خانگی، الکترونیک و آشپزخانه، عطر، جواهرات، فرش و قالی، عینک و سنگ های قیمتی است که همه در یک محیط سرگرم کننده و مدرن دور هم گرد آمده اند. مهمترین ویژگی های این مجموعه بزرگ تجاری عبارتند از پارک تفریحی، آمفی تئاتر، رستوران ها، فود کورت، کافی شاپ ها و بام سبز که از اوایل سال ٩٤ آماده خدمت رسانی بوده است. در حال حاضر تعداد ٢٠٠ واحد تجاری و ١٠٠٠ پارکینگ در این مجتمع وجود دارد که خوشامد گوی مهمانان عزیز از ساعت ١٠:٠٠ تا ١١:٠٠هستند. این مجتمع تجاری بزرگ در شمال تهران در نزدیکی میدان تجریش واقع شده است. فاصله این مجموعه تا هتل ١٠ کیلومتر است. '},
            {id:4, image:img4, title:'مجتمع تجاری سام تهران ', description: 'مجتمع تجاری سام در اواخر سال ١٣٩٠ با رویکرد جدیدی از ساخت یک فضای پویا در چارچوب اصالت شهر تهران با ساختار معماری منحصر به فرد و با توجه به نام تجاری معتبر و معروف جهان به منظور تطابق با نیاز مشتری ایجاد شد. ٢ ویژگی کلیدی مرکز سام عبارتند از: "اول اصالت و بعد ارائه سبک جدیدی برای زندگی و لباس". حضور مارک های معتبر و معروف در زمینه لباس، کیف و کفش، اقلام مکمل، طلا و جواهرات، ساعت مچی، نقره، لوازم آرایشی، عطر، ادوکلن برای پاسخگویی به نیازهای مختلف مشتریان است، به خصوص بازرگانان و سیاست گذاران و یا هر شخص دیگری که در جستجو اقلام منحصر به فرد است. فاصله این مرکز خرید تا هتل ٨ کیلومتر است. '},
            {id:5, image:img5, title: 'مجتمع مدرن الهیه، تهران', description:'مجتمع مدرن الهیه یک مرکز لوکس و مدرن خرید است که در سال ٢٠١١ افتتاح و در منطقه الهیه واقع شده است. در این مجتمع تجاری مجموعه ای از مارک های مشهور و بین المللی لباس، لوازم آرایشی، جواهرات، ساعت و لوازم جانبی قرار دارد. این ساختمان به وسعت ١٩١٥ مترمربع در بلوار آفریقا شمالی، بزرگراه مدرس واقع شده است. مساحت کل مجموعه حدود ١٧٠٠٠ متر مربع است که در ١١ طبقه توسعه یافته است. این مرکز اولین مجموعه تجاری مدرن در منطقۀ الهیه تهران است که با هدف جمع آوری برترین و معتبرترین مارک های دنیا ایجاد شده است. فاصله این مجموعه تا هتل ٨ کیلومتر است.'},
            {id:6, image:img6, title: 'مجتمع کوروش ، تهران ', description:'مجتمع کوروش با بیش از ٥٠٠ واحد تجاری در ١٧ طبقه، مجموعه ای از بزرگترین و بهترین واحد های تجاری، فرهنگی و سرگرمی است. با توجه به حضور مارک های مختلف و انواع محصولات و خدمات، مجتمع کوروش بهترین انتخاب برای کسانی است که مایل به تجربه بهترین ها هستند. معماری مدرن با راهروهای کوتاه، نسبت مناسب حجم ها و سطوح، راحتی حرکت انسان در فضا و طراحی هارمونیک رنگ و نور، از عوامل مهم ساخت این مجموعه هستند. از دیگر ویژگی های این مجموعه چشم انداز جذاب، جا به جایی راحت، گلخانه و به ویژه فضای وسیع بین طبقات که از طریق راهروها قابل مشاهده است، پله ها و آسانسور های عادی و پانورامیک می باشد. این مجموعه در فاصله ١١ کیلومتری هتل واقع شده است.'},
        ]

    return ( 
        <>
            <div className='shoppingTripBox'>
                <div className='sliderBox'>
                    <ShoppingTripSlider/>
                </div>
                <div className='titleBox'>
                    <button onClick={()=>setFlag('tour')}>موقعیت های گردشگری</button>
                    <h2>خرید در شهر</h2>
                    <button onClick={()=>setFlag('citytour')}>با علاقه سفر کنید!</button>
                </div>
            </div>
            <div>
                {
                    places.map((place) => (
                        <ShoppingCenter id={place.id} image={place.image} title={place.title} description={place.description}/>
                    ))
                }
            </div>
        </>
     );
}
 
export default ShoppingTrip;