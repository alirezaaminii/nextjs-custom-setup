import Link from 'next/link'
import {useRouter} from 'next/router'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

const MultiLanguage = () => {
    const router = useRouter()
    const {t} = useTranslation('common')

    return (
        <main>
            <div>
                <Link
                    href='/multi-language'
                    locale={router.locale === 'en' ? 'fa' : 'en'}
                >
                    <button>
                        {t('language.name')}
                    </button>
                </Link>
            </div>
        </main>
    )
}

export const getStaticProps = async ({locale}: { locale: string }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    },
})

export default MultiLanguage
