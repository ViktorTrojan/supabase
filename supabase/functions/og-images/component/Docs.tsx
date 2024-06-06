import React from 'https://esm.sh/react@18.2.0?deno-std=0.140.0'

type Props = {
  type?: string | null
  title: string
  description: string
  icon?: string | null
}

const Docs = (props: Props) => {
  const { type, title, description, icon } = props

  let typeName: string | undefined = type
    ?.replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase())
  let typeIcon: string | undefined = type?.toLowerCase()

  if (type === 'functions' || type === 'function') {
    typeName = 'Edge Functions'
  } else if (type === 'self-hosting') {
    typeIcon = 'resources'
  } else if (type === 'cli') {
    typeName = 'CLI'
    typeIcon = 'reference-cli'
  }

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        padding: 64,
        flexDirection: 'column',
        color: 'white',
        backgroundColor: '#1C1C1C',
        fontFamily: 'Circular',
      }}
    >
      <div tw="w-full flex flex-row items-center relative">
        {icon && (
          <img
            src={`https://raw.githubusercontent.com/supabase/supabase/master/apps/docs/public/img/icons/${icon}-icon.svg`}
            width="50px"
            height="50px"
          />
        )}
        {type && icon && <div tw="h-[50px] border-[1px] border-white mx-4"></div>}
        {type && (
          <>
            <div tw="w-[50px] h-[50px] bg-[#164430] rounded-md flex items-center justify-center">
              <img
                src={`https://raw.githubusercontent.com/supabase/supabase/master/apps/docs/public/img/icons/menu/${typeIcon}.svg`}
                width="80%"
                height="80%"
              />
            </div>
            <span tw="text-[36px] text-[#ededed] ml-[16px]">{typeName}</span>
          </>
        )}
        <div tw="flex flex-row items-center justify-center absolute right-0">
          <img
            src="https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo-wordmark--dark.png"
            width={180}
            height={34}
          />
          <span tw="text-lg font-normal text-[#3ecf8e] ml-2">DOCS</span>
        </div>
      </div>
      <div tw="flex flex-col flex-grow relative">
        <div tw="flex flex-col w-[1072px] mt-10">
          <h1 tw="my-0 mb-2 text-[60px]">{!title ? 'Supabase' : title}</h1>
          <p tw="my-0 mt-2 text-[40px] text-[#f2fff9] opacity-50">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Docs
