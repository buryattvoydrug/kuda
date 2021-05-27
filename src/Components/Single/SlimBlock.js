import React from 'react'

import '../../scss/Components/Single/Blocks.scss'

function SlimBlock() {
  return (
    <>
      <section className="slim-block">
            <p className="slim-text">
            На відміну від поширеної думки Lorem Ipsum не є випадковим набором літер. Він походить з уривку класичної латинської літератури 45 року до н.е., тобто має більш як 2000-річну історію. Річард Макклінток, професор латини з коледжу Хемпдін-Сидні, що у Вірджінії, вивчав одне з найменш зрозумілих латинських слів - consectetur - з уривку Lorem Ipsum, і у пошуку цього слова в класичній літературі знайшов безсумнівне джерело. Lorem Ipsum походить з розділів 1.10.32 та 1.10.33 цицеронівського "de Finibus Bonorum et Malorum" ("Про межі добра і зла").
            </p>
            <div className="slim-image">
              <img src="images/item.jpg" alt="" />
            </div>
      </section>
    </>
  )
}

export default SlimBlock
