function sidebar_catalog_items() {
  $('.m_lead-catalog-items .mobile-action a').on('click', function(){
    $(this).toggleClass('is-open');
    $(this).parents('.m_lead-catalog-items').find('ul').slideToggle('500');
  });
}
sidebar_catalog_items();